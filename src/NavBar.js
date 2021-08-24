import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavDiv = styled.div`
.title {
    font-family: 'Courgette', cursive;
    font-size: 60px;
    color: gray;
  }

  .nav-bar {
    overflow: hidden;
    padding-top: 1%;
    height: 50px
    width: 210px;
    position: relative; 
    top: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
  
  }

  .nav-links{
    // font-family: 'Source Sans Pro', sans-serif;
    // background-color: black;
    // color: white;
    border-color: black
    padding: 15px;
    margin: 5px;
    // text-align: center;
    text-decoration: none;
    font-size: 15px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    display: block;
    border-radius: 15px;


    .name {
        // color: white;
        text-align: right;
        text-decoration: none;
        font-size: 20px;
        // padding: 1%
        // margin: 5%;
        // transition-duration: 0.4s;
        // vertical-align: middle;
        // font-family: 'Satisfy', cursive;
      }






`

function NavBar({user, setUser, history, setSearchTerm}) {
    function handleLogOut(){

        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        alert("See you soon!")
        history.push('/')
      }


    return (
        <NavDiv> 
        <div className="nav-bar">
            <h1 className="title" >HairSuit</h1>
            <h2 className="name">Welcome {user.name}</h2>
            <nav className="nav_bar">           
                <NavLink className="nav-links" to="/home"   onClick={() => setSearchTerm("")}>
                Home
                </NavLink>
                <NavLink className="nav-links" to="/    my-appointments">
                 My Appointments
                </NavLink>
                <NavLink className="nav-links" to="/" onClick=    {handleLogOut}>
                   Logout
                </NavLink>
            </nav>            
        </div>
        </NavDiv>
    )
}

export default NavBar;