import {useEffect, useState} from "react";

const AllIngredients = () => {
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
            setIngredients(await ingredientsResponse.json());
        })()
    }, []);

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {ingredients ? (
                <>
                    {ingredients.meals.map((ingredient) => {
                        return (
                            <section style={{border: "1px solid black", margin: "2em"}} className={"highlighted"}>
                                <p>{ingredient.strIngredient}</p>
                                <p>{ingredient.strDescription}</p>
                            </section>
                        );
                    })}
                </>
            ) : (
                <>
                    <p>Loading...</p>
                </>
            )}
        </div>
    )
}

export default AllIngredients;