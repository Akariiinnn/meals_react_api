import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Meals from "./page/Meals";
import './Page.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/meals"} element={<Meals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
