import axios from "axios";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

function RegisterForm() : JSX.Element {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const [error, setError] = useState("");

    // const validation = () : boolean => {
    //     if(!username.trim() || !email.trim() || !password.trim()){
    //         setError("Please fill in all fields");
    //         console.log(error)
    //         return false;
    //     }
    //     setError("")
    //     return true;
    // }

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        if(!username.trim() || !email.trim() || !password.trim() || !emailRegex.test(email)){
            console.log("error")
            return;
        }
        try {await axios.post(`${apiUrl}/register`, {
            username : username,
            email : email,
            password : password
        })
        console.log("Register successful")
        setUsername("")
        setEmail("")
        setPassword("")
    }catch(err) {
        console.log(err)
    }
    }

    return (
        <div className="loginContainer">
        <form action="" onSubmit={handleSubmit}>
            <h1>Username : </h1>
            <input type="text" placeholder="Enter your username...." value={username} onChange={(e) => setUsername(e.target.value)}/>
            <h1>Email : </h1>
            <input type="email" placeholder="Enter your email...." value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h1>Password : </h1>
            <input type="password" placeholder="Enter your password...." value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value={"Register"}/>
        </form>
        </div>
    )
}

export default RegisterForm;