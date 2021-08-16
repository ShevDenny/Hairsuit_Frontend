import React, {useState} from 'react'
import SignUp from './SignUp'

function Login({setUser, history}) {
    const[formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const[errors, setErrors] = useState(null)
    const[signUp, setSignUp] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        const user = {
          user_name: formData.username,
          password: formData.password
        }
    
        fetch(`http://localhost:3000/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(userData => {
            if (userData.errors) {
                setErrors(userData.errors)

            } else {
                setUser(userData)
                history.push('/home')
            }
        })
      }

      function handleChange(e) {
          setFormData({
              ...formData, 
              [e.target.name]: e.target.value
          })
      }
    

    return (
        <div className="login">
            {!signUp ?
            <>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login In Belle</h2>

                <input 
                    type="text" 
                    placeholder="Username" 
                    value={formData.username} 
                    name="username" 
                    onChange={handleChange} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    name="password" 
                    onChange={handleChange} 
                />
                {errors ? errors.map(error => <div>{error}</div>) : null}
                <button type="submit" value="Login">Login</button>
                
                <button value="signup" onClick={() => setSignUp(!signUp)}>Create an Account</button>
                
            </form>
            </>
            :
            <SignUp setUser={setUser} history={history}/>
            }

        </div>
    )
}

export default Login;