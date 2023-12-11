import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RandomMeal from "../components/RandomMeal";

const Home = () => {
    return (
        <>
            <Header />
            <RandomMeal />
            <Footer />
        </>
    );
}

export default Home;