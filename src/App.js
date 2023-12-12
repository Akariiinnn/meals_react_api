import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Meals from "./page/Meals";
import './Page.css';
import Ingredients from "./page/Ingredients";
import Categories from "./page/Categories";
import FoodArea from "./page/FoodArea";
import MealDetails from "./page/MealDetails";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/meals"} element={<Meals/>}/>
                <Route path={"/ingredients"} element={<Ingredients/>}/>
                <Route path={"/categories"} element={<Categories/>}/>
                <Route path={"/foodarea"} element={<FoodArea/>}/>
                <Route path={"/meal/:id"} element={<MealDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

    export default App;
