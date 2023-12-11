import {useEffect, useState} from "react";

const RandomMeal = () => {

    const [randomMeal, setRandomMeal] = useState(null)

    useEffect(() => {
        (async () => {
            const randomMealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            setRandomMeal(await randomMealResponse.json());
        })()
    },[]);

    const sectionCSS = {
        width: "25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5%"
    }

    return (
        <>
            {randomMeal ? (
                <>
                    <h2>Here's a random meal</h2>
                    {randomMeal.meals.map((randomMeal) => {
                        return (
                            <section style={sectionCSS} className={"highlighted"}>
                                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                                <p>{randomMeal.strMeal}</p>
                            </section>
                        );
                    })}
                </>
            ) : (
                <>
                    <p>Loading...</p>
                </>
            )}
        </>
    )
}

export default RandomMeal;