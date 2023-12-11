import {useEffect, useState} from "react";

const AllFoodAreas = () => {
    const [foodAreas, setFoodAreas] = useState(null);

    useEffect(() => {
        (async () => {
            const foodAreasResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
            setFoodAreas(await foodAreasResponse.json());
        })()
    }, []);

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {foodAreas ? (
                <>
                    {foodAreas.meals.map((foodAreas) => {
                        return (
                            <section style={{border: "1px solid black", margin: "2em", width:"200px", textAlign: "center"}} className={"highlighted"}>
                                <p>{foodAreas.strArea}</p>
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

export default AllFoodAreas;