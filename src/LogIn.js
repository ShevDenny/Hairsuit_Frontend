import React, {useState} from 'react'
import SignUp from './SignUp'
import styled from 'styled-components'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
const LoginDiv = styled.div` 
h1, h2 {
  font-family: 'Ubuntu', sans-serif;
}

`

function LogIn({setUser, history, loading, setLoading, user}) {
    const[formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const[errors, setErrors] = useState([])
    const[signUp, setSignUp] = useState(false)
   

    function handleSubmit(e){
        e.preventDefault()
        // setLoading(true)
        const user = {
          user_name: formData.username,
          password: formData.password
        }
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({user}),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.errors) {
              setErrors(data.errors);
          } else {
            const {user, token} = data;
            localStorage.setItem("token", token)
            setUser(user)
            // setLoading(!loading)
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
     

        <div className="log-in">
            {!signUp ?
            <>
            <form id="login" className="" onSubmit={handleSubmit}>
                {/* <h1 className="login-header">Welcome to HairSuit</h1> */}
                <h2 className="login-subheader">Sign In </h2>

                <input 
                    type="text" 
                    placeholder="Username" 
                    value={formData.username} 
                    name="username" 
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    name="password" 
                    onChange={handleChange}
                    required 
                />
                {errors ? errors.map(error => <div>{error}</div>) : null}
                <button className="user-btn" type="submit" value="Login">Login</button>
                
                <button className="user-btn" value="signup" onClick={() => setSignUp(!signUp)}>Create an Account</button>
                
            </form>
            </>
            :
            <SignUp setUser={setUser} history={history}/>
            }

        </div>
        



    )
    
    
}

export default LogIn;