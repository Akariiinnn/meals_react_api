import {Link} from "react-router-dom";

const LastThreeMeals = ({ meals }) => {

        const sectionCSS = {
            width: "33%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2%"
        }
        const buttonCSS = {
            backgroundColor: "lightblue",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "2em",
            cursor: "pointer",
            marginBottom: "5%"
        }

        const lastThreeMeals = meals.slice(-3)

        return (
            <>
                {lastThreeMeals.map((meal) => {
                    return (
                        <section style={sectionCSS} className={"highlighted"}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <h2>{meal.strMeal}</h2>
                            <Link to={`/meal/${meal.idMeal}`}><button style={buttonCSS}>Voir la recette</button></Link>
                        </section>
                    )
                })}
            </>
        )
}

export default LastThreeMeals;