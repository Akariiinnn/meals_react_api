import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ShowMeal from "../components/ShowMeal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MealDetails = () => {

    const {id} = useParams();

    const [meal, setMeal] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const responseData = await response.json();
            setMeal(responseData.meals[0]);
        })();
    }, [id]);

    return (
        <>
            <Header />
            { meal ? (
                <ShowMeal meal={meal} />
            ) : (
                <ShowMeal meal={{strMeal: "...", strMealThumb: "/images/loading.gif", strIngredient1:"...", strIngredient2:"...", strIngredient3:"...", strInstructions:"...", strCategory:"...", strYoutube:"..."}} />
            )}
            <Footer />
        </>
    );
}

export default MealDetails;