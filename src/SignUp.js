import React, {useState} from 'react'


function SignUp({setUser, history}) {
    const[formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        admin: false
    })
    const[errors, setErrors] = useState(null)
       

      function handleSubmit(e){
        e.preventDefault()
        const user = {
            name: formData.name,
            user_name: formData.username,
            password: formData.password,
            email: formData.email,
            admin: false
        }

        const token =localStorage.getItem('token')
        fetch(`http://localhost:3000/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(userData => {
            if (userData.errors) {
                setErrors(userData.errors)

            } else {
                const{user, token}= userData
                localStorage.setItem("token", token)
               
                setUser(user)
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
        <div className="signup">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2> Join our community today </h2>

                <input 
                    type="text" 
                    placeholder="Enter your name..." 
                    value={formData.name} name="name" 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Choose a username..." 
                    value={formData.username} 
                    name="username" 
                    onChange={handleChange} 
                />
                <input 
                    type="password" 
                    placeholder="Password.." 
                    value={formData.password} 
                    name="password" 
                    onChange={handleChange} 
                />
                <input 
                    type="email" 
                    placeholder="Enter your email.." 
                    value={formData.email} 
                    name="email" 
                    onChange={handleChange} 
                />
                {/* <button onClick={() => setFormData(!formData.admin)}>Admin</button> */}
                {errors ? errors.map(error => <div>{error}</div>) : null}
                <button className="user-btn" type="submit" value="Sign up!">Sign up</button>
                <a href="http://localhost:2000/">Already have an account?</a>
            </form>
        </div>
    )
}

export default SignUp;