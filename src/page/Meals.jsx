import AllMeals from "../components/AllMeals";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Meals = () => {

    return (
        <div>
            <Header />
            <h1>Toutes nos recettes</h1>
            <AllMeals />
            <Footer />
        </div>
    )
}

export default Meals;