import { useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

function LoginForm() : JSX.Element {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        if(!username.trim() || !password.trim()){
            console.log("error")
            return;
        }
        try {
            await axios.post(`${apiUrl}/login`, {
                username : username,
                password : password
            })
            setUsername("")
            setPassword("")
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="loginContainer">
        <form action="" onSubmit={handleSubmit}>
            <h1>Username : </h1><br />
            <input type="text" placeholder="Enter your username...." value={username} onChange={(e) => setUsername(e.target.value)}/>
            <h1>Password : </h1><br />
            <input type="password" placeholder="Enter your password...." value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value={"Login"}/>
        </form>
        </div>
    )
}

export default LoginForm;