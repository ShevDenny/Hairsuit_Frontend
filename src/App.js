import './App.css';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import MainContent from './MainContent'
import 'semantic-ui-css/semantic.min.css';
import LogIn from './LogIn'






function App() {
  const[user, setUser] = useState(null)
  const[errors, setErrors] = useState(null)
  const[loading, setLoading] = useState(false)

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
      if(currentUser.errors) {
        setErrors(currentUser.errors)
      } else {
        setUser(currentUser)
        setLoading(!loading)
      }
    })
  },[])




   if(!loading) {
        return <h2>Please wait loading...</h2>
      }
 

  if(!user) return <LogIn key={user} user={user} setUser={setUser} history={history}/>

  return (
    <div className="App">
      
      <MainContent user={user} setUser={setUser} history={history}/> 
     
    </div>
  );
}

export default App;
