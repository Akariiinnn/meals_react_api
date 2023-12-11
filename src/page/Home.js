import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page..</p>
            <Link to={"/meals"}><p style={{textDecoration: "none", color:"inherit"}}>Les recettes</p></Link>
        </div>
    );
}

export default Home;