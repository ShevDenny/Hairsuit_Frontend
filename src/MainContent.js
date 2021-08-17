import {Route, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import HomePage from './HomePage'
import SalonDisplay from './SalonDisplay'
import MyAppointments from './MyAppointments'
import LogIn from './LogIn'
import SignUp from './SignUp'
import SalonPage from './SalonPage'


function MainContent({user, setUser, history}) {
    const [salons, setSalons] = useState([])
    const [salon, setSalon] = useState({})
    const [searchTerm, setSearchTerm] = useState("")
    const[appointments,setAppointments] = useState([])

    console.log(salon)

  
    useEffect(() => {
        fetch(`http://localhost:3000/salons`)
        .then(res => res.json())
        .then(salonData => setSalons(salonData))
    },[])

    useEffect(() => {
        fetch(`http://localhost:3000/appointments`)
        .then(res => res.json())
        .then(appointmentData => setAppointments(appointmentData))
    },[])

    console.log(appointments)




  
    function handleSearch(e) {
        e.preventDefault();
        // console.log(searchTerm)
        // setSearchTerm(e.target.value)
        history.push('/salons')
    }
  
    console.log(salons)
  
  
    const filteredSalons = salons.filter(salon => {
      return (salon.name.toLowerCase().includes(searchTerm.toLowerCase()))
      ||
      (salon.specialize_in.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  
    console.log(filteredSalons)

    return (
        <>
            <Switch>
                
                <Route exact path="/home">
                    <HomePage setUser={setUser} salons={salons} setSalons={setSalons} setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch} />
                </Route>                
                <Route path="/my-appointments">
                    <MyAppointments appointments={appointments} setAppointments={setAppointments} />
                </Route>
                <Route path="/salons">
                    <SalonDisplay setSalon={setSalon} salonList={filteredSalons} history={history} />
                </Route>
                <Route path="/salon-info">
                    <SalonPage user={user} history={history} salon={salon} appointments={appointments} setAppointments={setAppointments} />
                </Route>              
            </Switch>        
        </>
    )
}

export default MainContent;