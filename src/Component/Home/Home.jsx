import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Home.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Sidebar_1 from '../Sidebar_1/Sidebar_1';
import Footer from '../Footer/Footer';

export default function Home() {
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);  // 👈 Loader state
    const [error, setError] = useState(null);  // 👈 Error state

    useEffect(() => {
        async function fetchMeals() {
            setIsLoading(true);
            setError(null);  // Reset error before new request
            try {
                let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
                if (categoryName && categoryName !== 'All') {
                    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
                }
                const { data } = await axios.get(url);
                setMeals(data.meals || []);
            } catch (err) {
                setError('Failed to fetch meals. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }
        fetchMeals();
    }, [categoryName]);

    // Navigate to Details page with meal ID
    const handleViewRecipe = (id) => {
        navigate(`/detaile/${id}`);
    };

    return (
        <>
        
        
        <div className={style.pageContainer}>
            {/* Sidebar */}
            <Sidebar_1 onSelect={() => {}}  />

            {/* Main Content */}
            <div className={style.content}>
                <Nav />

                {/* Loader */}
                {isLoading && <div className={style.loader}></div>}

                {/* Error Message */}
                {error && <p className={style.error}>{error}</p>}

                {/* Meals Container */}
                <div className={style.container}>
                    {!isLoading && !error && meals.length > 0 ? (
                        meals.map((categ, index) => (
                            <div className={style.card} key={index}>
                                <img src={categ.strMealThumb} alt={categ.strMeal} />
                                <h2>{categ.strMeal}</h2>
                                {categoryName === 'All' && (
                                    <p>
                                        <i className="fa-solid fa-earth-americas" /> {categ.strArea}
                                    </p>
                                )}
                                <button className={style.btn} onClick={() => handleViewRecipe(categ.idMeal)}>
                                    View Recipe
                                </button>
                            </div>
                        ))
                    ) : (
                        !isLoading && !error && <p className={style.noResults}>No meals found.</p>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
