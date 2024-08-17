import ("./App.css")
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./component/Nav"
import Homepage from "./component/Homepage"
import LoginForm from "./component/LoginForm"
import AboutMe from "./component/Aboutme"
import RegisterForm from "./component/Registerform"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element = {<Homepage/>} />
        <Route path="/about" element = {<AboutMe/>} />
        <Route path="/register" element = {<RegisterForm/>} />
        <Route path="/login" element = {<LoginForm/>} />
      </Routes>
    </div>
    </BrowserRouter>




  )
}

export default App
