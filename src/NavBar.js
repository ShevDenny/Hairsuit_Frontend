import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavDiv = styled.div`
.title {
    font-family: 'Courgette', cursive;
    font-size: 60px;
    color: #eff1abf8;
    // color: rgba(128, 128, 128, 0.411);
    top: 50px;
    float: left;
    margin-top: 1%;
    margin-left: 2%;
   
  
  }

  .nav_bar {
    overflow: hidden;
    // padding-top: 1%;
    // background: white;
    // height: 50px
    width: 100%;
    position: relative; 
    // bottom: 0;
    z-index: 1000;
    display: block;
    margin-top: 1%;   
  
  }

  .nav-bar {
      background: black;
  }



.name {
    color: white;
    // text-align: right;
    float: left;
    // text-decoration: none;
    font-size: 12px;
    margin-top: 8%;
    margin-left: -220px;
    font-family: 'Besley', serif;
    // // padding: 1%
    // // margin: 5%;
    // // transition-duration: 0.4s;
    // // vertical-align: middle;
    // // font-family: 'Satisfy', cursive;
  }
  .link-btn {
    font-family: 'Alegreya', serif;
    background: transparent;
    border-radius: 0px;
    border: none;
    text-align: center;
    font-size: 20px;
    color: white;
    padding: 8px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: -30px;
  }

  .link-btn:hover span{
      padding-right: 25px;
  }

  .link-btn span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
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
            <h2 className="name">{user.name}, need a breath of fresh hair?</h2>
            <nav className="nav_bar">           
                <NavLink className="nav-links" to="/home"   onClick={() => setSearchTerm("")}>
                <button className="link-btn"><span>Home</span></button>
                </NavLink>
                <NavLink className="nav-links" to="/my-appointments">
                <button className="link-btn"><span>My Appointments</span></button>
                </NavLink>
                <NavLink className="nav-links" to="/" onClick=    {handleLogOut}>
                <button className="link-btn"><span>Logout</span></button>
                </NavLink>
            </nav>            
        </div>
        </NavDiv>
        
    )
}

export default NavBar;