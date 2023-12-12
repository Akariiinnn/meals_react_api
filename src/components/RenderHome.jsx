import RandomMeal from "./RandomMeal";
import LastThreeMeals from "./LastThreeMeals";
import {useEffect, useState} from "react";

const RenderHome = () => {

    const [meals, setMeals] = useState(null)

    useEffect(() => {
        (async () => {
            const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            const mealsResponseData = await mealsResponse.json()
            setMeals(mealsResponseData.meals);
        })()
    },[]);

    const sectionCSS = {
        display: "flex",
        alignItems: "flex-start",
        marginRight: "2%",
        marginLeft: "2%"
    }

    const randomCSS = {
        width: "100%"
    }

    const lastThreeCSS = {
        width: "100%",
        display: "flex",
        alignItems: "flex-start"
    }

    const leftCSS = {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column"
    }

    const rightCSS = {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column"
    }

    return (
        <>
            {meals ? (
                <section style={sectionCSS}>
                    <section style={leftCSS}>
                        <h2>Here, take a random meal</h2>
                        <section style={randomCSS}>
                            <RandomMeal meals={meals}/>
                        </section>
                    </section>
                    <section style={rightCSS}>
                        <h2>Last Three Meals</h2>
                        <section style={lastThreeCSS}>
                            <LastThreeMeals meals={meals}/>
                        </section>
                    </section>
                </section>
            ) : (
                <RandomMeal meals={[{ strMeal: "... ", strMealThumb: "/images/loading.gif" }]}/>
            )}
        </>
    );
}

export default RenderHome;