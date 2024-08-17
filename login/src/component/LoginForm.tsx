function LoginForm() : JSX.Element {
    return(
        <div className="loginContainer">
        <form action="">
            <h1>Username : </h1><br />
            <input type="text" placeholder="Enter your username...."/>
            <h1>Password : </h1><br />
            <input type="password" placeholder="Enter your password...."/>
            <input type="submit" value={"Login"}/>
        </form>
        </div>
    )
}

export default LoginForm;