import {Link} from "react-router-dom";

const Header = () => {
    const navCSS = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        background: "#cfd8dc",
        paddingRight: "2%"
    };
    const ulCSS = {
        display: "flex",
        listStyle: "none",
        alignItems: "center"
    };
    const liCSS = {
        paddingRight: "1rem"
    }

    return (
        <header>
            <nav style={navCSS}>
                <ul style={ulCSS}>
                    <li style={liCSS}><Link to={"/"}>Home</Link></li>
                    <li style={liCSS}><Link to={"/meals"}>Meals</Link></li>
                    <li style={liCSS}><Link to={"/categories"}>Categories</Link></li>
                    <li style={liCSS}><Link to={"/ingredients"}>Ingredients</Link></li>
                    <li style={liCSS}><Link to={"/foodarea"}>Areas</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;