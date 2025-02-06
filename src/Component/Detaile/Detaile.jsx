// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// export default function Detaile() {


//     const [categories, setCategories] = useState([]);
//     async function getCategories() {
//         try {
//             const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//             console.log(data);
//             setCategories(data.meals)
//         }
//         catch (error) {
//             console.error('Error:', error);
//         }
//     }
//     useEffect(() => {
//         getCategories();
//     }, []);


//     return (
//         <>
//             <div>
//                 <h1>sushi</h1>
//                 <img src="https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg" alt="" />
//                 <div><div>
//                     <a href="youi.com"><i className="fa-brands fa-youtube" />Youtube</a>
//                     <a href="youi.com"><i className="fa-solid fa-globe" /> Source</a>
//                 </div>
//                 </div>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus nisi minima, iste voluptates maxime deserunt voluptate facilis qui officia!</p>
//                 <div>
//                     <h2>
//                         <div>
//                             <p>strIngredient1</p>
//                             <p>strMeasure1</p>
//                         </div>
//                     </h2>
//                 </div>
//             </div>
//         </>
//     )
// }


// strMeal  Sushi
// strInstructions description




// strIngredient1        strMeasure1
// strIngredient1        strMeasure1
// strIngredient1        strMeasure1
// strIngredient1        strMeasure1
// strIngredient1        strMeasure1



// strSource
// strYoutube
// strMealThumb




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detaile.module.scss';
// import Sidebar_1 from '../Sidebar_1/Sidebar_1';
import Footer from '../Footer/Footer';
import Sidebar_1 from '../Sidebar_1/Sidebar_1';

export default function Details() {
    const { id } = useParams(); // Get meal ID from URL
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        async function fetchMealDetails() {
            try {
                const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setMeal(data.meals[0]);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchMealDetails();
    }, [id]);

    if (!meal) return <p>Loading...</p>;

    return (

        <>
            <div className={style.detailsContainer}>
                <Sidebar_1 onSelect={() => {}} />
                <div className={style.recipeHeader}>
                    <h1 className={style.recipeTitle}>{meal.strMeal}</h1>
                </div>

                <div className={style.content}>
                    <div className={style.imageSection}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className={style.recipeImage} />
                        <div className={style.buttons}>
                            <a href={meal.strYoutube} target="_blank" rel="" className={`${style.btn} ${style.youtube}`}>
                                YouTube
                            </a>
                            <a href={meal.strSource} target="_blank" rel="" className={`${style.btn} ${style.source}`}>
                                Source
                            </a>
                        </div>
                    </div>

                    <div className={style.instructions}>
                        <h2>Instructions</h2>
                        <p>{meal.strInstructions}</p>
                    </div>

                    <div className={style.ingredients}>
                        <h2>Ingredients</h2>
                        <ul>
                            {Array.from({ length: 20 }, (_, i) => i + 1)
                                .map(i => ({
                                    ingredient: meal[`strIngredient${i}`],
                                    measure: meal[`strMeasure${i}`],
                                }))
                                .filter(item => item.ingredient && item.ingredient.trim())
                                .map((item, index) => (
                                    <li key={index}>
                                        <span>{item.ingredient}</span>
                                        <span>{item.measure}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>


    );
}
