import {Link} from "react-router-dom";

const MealCard = ({meal, style}) => {
    return (
        <article className={"highlighted"} style={style}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <p>Category : <b>{meal.strCategory}</b></p>
            <Link to={`/meal/${meal.idMeal}`}><button className={"thebutton"}>Voir la recette</button></Link>
        </article>
    )
}

export default MealCard;