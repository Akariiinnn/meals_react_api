import {Link} from "react-router-dom";

const RandomMeal = ({meals}) => {

    const sectionCSS = {
        width: "75%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5%"
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

    const randomMeal = meals[Math.floor(Math.random() * meals.length)]

    return (
        <>
            <section style={sectionCSS} className={"highlighted"}>
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal}/>
                <h2>{randomMeal.strMeal}</h2>
                <Link to={`/meal/${randomMeal.idMeal}`}><button style={buttonCSS}>Voir la recette</button></Link>
            </section>
        </>
    )
}

export default RandomMeal;