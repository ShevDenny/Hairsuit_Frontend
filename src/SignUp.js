function SignUp() {


    return (
        <div className="signup">
            <form className="signup-form">
                <h2>Sign up and join our community today! </h2>
                <input type="text" placeholder="Enter your name..." value="" name="name" />
                <input type="text" placeholder="Choose a username..." value="" name="name" />
                <input type="password" placeholder="Password.." value="" name="name" />
                <input type="email" placeholder="Enter your email.." value="" name="name" />
                <input type="submit" value="Sign up!" />
            </form>
        </div>
    )
}

export default SignUp;