const ShowMeal = ({meal}) => {

    // get end of youtube video after the last slash
    console.log(meal)

    return (
        <article className={"single-meal"}>
            <div className={"meal-left"}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal}/>
                <p>Category : <b>{meal.strCategory}</b></p>
            </div>
            <div className={"meal-right"}>
                <h2>Ingrédients</h2>
                <ul>
                    {Object.keys(meal).map((key) => {
                        if (key.includes("strIngredient") && meal[key]) {
                            return (
                                <li key={key}>{meal[key]} {meal[`strMeasure${key.split("strIngredient").pop()}`]}</li>
                            )
                        }
                        return null;
                    })}
                </ul>
                <h2>Instructions</h2>
                <div dangerouslySetInnerHTML={{__html: meal.strInstructions}}></div>
                <iframe width="560" height="315"
                        src={`https://www.youtube.com/embed/${meal.strYoutube.split("=").pop()}`}
                        title={"YouTube video player"} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </article>
    )
}

export default ShowMeal;