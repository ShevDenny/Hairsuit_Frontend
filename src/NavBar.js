import {NavLink} from 'react-router-dom'

function NavBar({user, setUser, history, setSearchTerm}) {
    function handleLogOut(){

        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        alert("See you soon!")
        history.push('/')
      }


    return (
        <div className="nav-bar">
            <h2 className="name">Welcome {user.name}</h2>           
            <NavLink className="nav-links" to="/home" onClick={() => setSearchTerm("")}>
                Home
            </NavLink>
            <NavLink className="nav-links" to="/my-appointments">
                My Appointments
            </NavLink>
            <NavLink className="logout-link" to="/" onClick={handleLogOut}>
                Logout
            </NavLink>           
        </div>
    )
}

export default NavBar;