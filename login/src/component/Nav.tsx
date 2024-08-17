import { Link } from "react-router-dom";

function Nav() : JSX.Element {
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
            </ul>
        </div>
    )
}

export default Nav;