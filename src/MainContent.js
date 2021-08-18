import {Route, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import HomePage from './HomePage'
import SalonDisplay from './SalonDisplay'
import MyAppointments from './MyAppointments'
import SalonPage from './SalonPage'
import NavBar from './NavBar'


function MainContent({user, setUser, history}) {
    const [salons, setSalons] = useState([])
    const [salonInfo, setSalonInfo] = useState({})
    const [searchTerm, setSearchTerm] = useState("")
    const[appointments,setAppointments] = useState([])


  
    useEffect(() => {
        fetch(`http://localhost:3000/salons`)
        .then(res => res.json())
        .then(salonData => setSalons(salonData))
    },[])
    // console.log(user.appointments)


    // useEffect(() => {
    //     // const userId = localStorage.getItem("user")
    
    //     // console.log(userId)
    //     fetch(`http://localhost:3000/appointments?token=${userId}`)
    //     .then(res => res.json())
    //     .then(appointmentData => {
    //         console.log(appointmentData)
    //         setAppointments(appointmentData)
    //     })
    // },[])
    


  
    function handleSearch(e) {
        e.preventDefault();
        history.push('/salons')
        
    }
    
  
    const filteredSalons = salons.filter(salon => {
      return (salon.name.toLowerCase().includes(searchTerm.toLowerCase()))
      ||
      (salon.specialize_in.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  
    console.log(filteredSalons)

    console.log(salonInfo)

    return (
        <>
            <NavBar user={user} setUser={setUser} history={history} setSearchTerm={setSearchTerm} />
            <Switch>
                
                <Route exact path="/home">
                    <HomePage setUser={setUser} salons={salons} setSalons={setSalons} setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch}  />
                </Route>                
                <Route path="/my-appointments">
                    <MyAppointments appointments={appointments} user={user} setAppointments={setAppointments} />
                </Route>
                <Route path="/salons">
                    <SalonDisplay setSalonInfo={setSalonInfo} salonList={filteredSalons} history={history} />
                </Route>
                <Route path="/salon-info">
                    <SalonPage user={user} history={history} salonInfo={salonInfo} appointments={appointments} setAppointments={setAppointments} />
                </Route>              
            </Switch>        
        </>
    )
}

export default MainContent;