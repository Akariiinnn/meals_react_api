import {useEffect, useState} from "react";

const AllCategories = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            setCategories(await categoriesResponse.json());
        })()
    }, []);

    return (
        <div style={{display: "flex", flexWrap: "wrap", alignItems:"flex-start"}}>
            {categories ? (
                <>
                    {categories.categories.map((category) => {
                        return (
                            <section style={{ border: "1px solid black", margin: "2em", width:"200px", textAlign: "center"}} className={"highlighted"}>
                                <img src={category.strCategoryThumb} alt={category.strCategory}/>
                                <h2>{category.strCategory}</h2>
                                <p>{category.strCategoryDescription}</p>
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

export default AllCategories;