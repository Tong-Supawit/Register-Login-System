import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { StateContext } from "./context/StateContext";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
// import LogoutSubmit from "./functionHandle/LogoutSubmit";

function Nav() : JSX.Element {
    const {setUsername, setPassword} = useContext(StateContext);
    const logoutSubmit = async() => {
        try{
            setUsername("");
            setPassword("");
            await axios.post(`${apiUrl}/logout`)
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to = "/">Home Page</Link>
                </li>
                <li>
                    <Link to = "/about">About Me</Link>
                </li>
                <li>
                    <Link to = "/register">Register</Link>
                </li>
                <li>
                    <Link to = "/login">Login</Link>
                </li>
                <li>
                    <Link to = "/logout">
                    <button onClick={logoutSubmit}>Logout</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;