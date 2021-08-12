import {Route, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import HomePage from './HomePage'
import SalonDisplay from './SalonDisplay'
import MyAppointments from './MyAppointments'
import LogIn from './LogIn'
import SignUp from './SignUp'
import SalonPage from './SalonPage'


function MainContent() {
    const [salons, setSalons] = useState([])
    const [salon, setSalon] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
  
    let history = useHistory()
  
    useEffect(() => {
        fetch(`http://localhost:3000/salons`)
        .then(res => res.json())
        .then(salonData => setSalons(salonData))
    },[])
  
    function handleSearch(e) {
        e.preventDefault();
        console.log(searchTerm)
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
                <Route exact path="/">
                    <HomePage salons={salons} setSalons={setSalons} setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch} />
                </Route>                
                <Route path="/my-appts">
                    <MyAppointments />
                </Route>
                <Route path="/salons">
                    <SalonDisplay setSalon={setSalon} salonList={filteredSalons} history={history} />
                </Route>
                <Route path="/salon-info">
                    <SalonPage salon={salon} />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>        
        </>
    )
}

export default MainContent;