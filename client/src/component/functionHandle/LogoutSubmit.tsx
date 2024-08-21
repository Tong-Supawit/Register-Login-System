import { useContext } from "react";
import { StateContext } from "../context/StateContext";

function LogoutSubmit(){
    const {setUsername} = useContext(StateContext)
    const handleLogout = () => {
        setUsername("")
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
    return handleLogout;
}

export default LogoutSubmit;