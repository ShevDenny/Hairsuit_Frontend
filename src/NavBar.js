import {NavLink} from 'react-router-dom'

function NavBar({user, setUser}) {
    function handleLogOut(){
        // async function logout(){
        //   const res = await fetch('/logout', {method: 'DELETE'})
        //   if(res.ok){
        //     setCurrentUser({})
        //   }
        // }
        // logout()
        localStorage.removeItem("user_id")
        setUser(null)
        alert("See you soon!")
      }


    return (
        <div className="nav-bar">
            {/* <h2 className="name">Welcome {user.name}!</h2>            */}
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/my-appointments">
                My Appointments
            </NavLink>
            <NavLink to="/" onClick={handleLogOut}>
                Logout
            </NavLink>           
        </div>
    )
}

export default NavBar;