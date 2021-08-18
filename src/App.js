import './App.css';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar'
import MainContent from './MainContent'
import 'semantic-ui-css/semantic.min.css';
// import { createGlobalStyle } from "styled-components"
import LogIn from './LogIn'






function App() {
  const[user, setUser] = useState(null)

  let history = useHistory()
 
  useEffect(() => {
    const token = localStorage.getItem('token'); 
    fetch(`http://localhost:3000/me`,{
      headers: {
       Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then(currentUser => {
      setUser(currentUser)
    })
  },[])

  if(!user) return <LogIn key={user} user={user} setUser={setUser} history={history}/>
  




  return (
    <div className="App">
      
      
      <NavBar user={user} setUser={setUser} history={history} />
      <MainContent user={user} setUser={setUser} history={history}/>
     
     
    </div>
  );
}

export default App;
