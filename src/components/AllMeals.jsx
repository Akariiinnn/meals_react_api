import MealCard from "./MealCard";
import {useEffect, useState} from "react";

const AllMeals = () => {
    const [meals, setMeals] = useState(null);

    useEffect(() => {
        (async () => {
            const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            setMeals(await mealsResponse.json());
        })()
    }, []);

    const fakeMealsArray = [];

    for (let i = 0; i < 25; i++) {
        fakeMealsArray.push({
            strMeal: "... ",
            strMealThumb: "/images/loading.gif"
        })
    }

    return (
        <section>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {meals ? (
                    <>
                        {meals.meals.map((meal) => {
                            return (
                                <>
                                    <MealCard meal={meal} style={{width: "20%"}}/>
                                </>)
                        })}
                    </>
                ) : (
                    <>
                        {fakeMealsArray.map((meal) => {
                            return (<MealCard meal={meal} style={{width: "20%"}}/>);
                        })}
                    </>
                )}

            </div>
        </section>
    )
}

export default AllMeals;