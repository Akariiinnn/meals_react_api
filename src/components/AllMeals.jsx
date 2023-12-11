import MealCard from "./MealCard";
import {useState} from "react";

const AllMeals = () => {
    const [meals, setMeals] = useState(null);

    if (meals === null) {
        (async () => {
            const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            // quand les données sont récupérées depuis mon api
            // je stocke dans le state les données de l'api
            // ce qui force mon composant à être rechargé
            setMeals(await mealsResponse.json());
        })()
    }
    return (
        <section>
            <div style={{display: "flex", flexWrap: "wrap"}}>
            {meals ? (
                <>
                    {meals.meals.map((meal) => {
                        return (
                            <MealCard meal={meal} style={{width:"20%"}} />
                        );
                    })}
                </>
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </section>
    )
}

export default AllMeals;