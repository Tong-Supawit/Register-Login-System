import { createContext, useState, ReactNode } from "react";

interface StateContextInterface {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface StateProviderProps {
    children : ReactNode;
}

const StateContext = createContext<StateContextInterface>({
    username: "",
    setUsername: () => {},
    password: "",
    setPassword: () => {}
})

function StateProvider({children} : StateProviderProps){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <StateContext.Provider value= {{username, setUsername, password, setPassword}}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext, StateProvider};