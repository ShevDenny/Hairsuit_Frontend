function Login() {


    return (
        <div className="login">
            <form className="login-form">
                <h2>Login In Belle</h2>
                <input type="text" placeholder="Username" value="" name="name" />
                <input type="password" placeholder="Password" value="" name="name" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;