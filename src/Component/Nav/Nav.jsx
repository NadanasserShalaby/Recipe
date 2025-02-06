import React, { useEffect, useState } from 'react';
import style from './Nav.module.scss';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Nav() {
    const [categories, setCategories] = useState([]);
    const { categoryName } = useParams(); // Get selected category from URL
    const [activeCategory, setActiveCategory] = useState(categoryName || "All"); // Default to "All"

    // Fetch categories on mount
    useEffect(() => {
        async function getCategories() {
            try {
                const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                setCategories(data.meals);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getCategories();
    }, []);

    // Update active category when URL changes
    useEffect(() => {
        setActiveCategory(categoryName || "All");
    }, [categoryName]);

    return (
        <div className={style.container}>
            <h1 className={style.header}>Learn, Cook, Eat Your Food</h1>

            {/* "All" Button */}
            <Link
                className={`${style.button} ${activeCategory === 'All' ? style.active : ''}`}
                to="/category/All"
            >
                All
            </Link>

            {/* Dynamic Category Buttons */}
            {categories.map((categ) => (
                <Link
                    key={categ.strCategory}
                    className={`${style.button} ${activeCategory === categ.strCategory ? style.active : ''}`}
                    to={`/category/${categ.strCategory}`}
                >
                    {categ.strCategory}
                </Link>
            ))}
        </div>
    );
}
