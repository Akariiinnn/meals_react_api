import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Meals from "./page/Meals";
import './Page.css';
import Ingredients from "./page/Ingredients";
import Categories from "./page/Categories";
import FoodArea from "./page/FoodArea";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/meals"} element={<Meals />} />
        <Route path={"/ingredients"} element={<Ingredients />} />
        <Route path={"/categories"} element={<Categories />} />
        <Route path={"/foodarea"} element={<FoodArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
