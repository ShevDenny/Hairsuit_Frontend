import {NavLink} from 'react-router-dom'

function NavBar() {


    return (
        <div className="nav-bar">           
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/my-appointments">
                    My Appointments
                </NavLink>           
        </div>
    )
}

export default NavBar;