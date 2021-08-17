import './App.css';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar'
import MainContent from './MainContent'

import LogIn from './LogIn'






function App() {
  const[user, setUser] = useState(null)

  let history = useHistory()
  useEffect(() => {
    const onlineUser = localStorage.getItem("user")
        if(onlineUser){
        setUser(JSON.parse(onlineUser))}
  },[])


  if(!user) return <LogIn user={user} setUser={setUser} history={history}/>


  return (
    <div className="App">
      
      <>
      <NavBar user={user} setUser={setUser} history={history} />
      <MainContent user={user} setUser={setUser} history={history}/>
      </>
     
    </div>
  );
}

export default App;
