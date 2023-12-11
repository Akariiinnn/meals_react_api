const MealCard = ({meal, style}) => {
    return (
        <article className={"highlighted"} style={style}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <p>Category : <b>{meal.strCategory}</b></p>
        </article>
    )
}

export default MealCard;