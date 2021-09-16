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
    const [appointments,setAppointments] = useState([])
    const [reviews, setReviews] = useState([])  
    const [salonReviews, setSalonReviews] = useState([])
    
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/salons`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(salonData => setSalons(salonData))
    },[])


    
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        
        fetch(`http://localhost:3000/appointments`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(appointmentData => {
            console.log(appointmentData)
            let userAppt = appointmentData.filter(appt => appt.user.id === user.id)
            console.log(userAppt)
            setAppointments(userAppt)
        })
    },[])
    

    
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews`, { 
            headers: { 
                'Authorization': `Bearer ' ${token}`,
            },
        })
        .then(res => res.json())
        .then(reviewData => setReviews(reviewData))

    },[])

    console.log(reviews)

    const updateReview = (result) => {
        setSalonReviews([...salonReviews, result]) 
    }
    
    
    function handleSearch(e) {
        e.preventDefault();
        history.push('/salons')
        
    }
    
    
    const filteredSalons = salons.filter(salon => {
        return (salon.name.toLowerCase().includes(searchTerm.toLowerCase()))
        ||
        (salon.specialize_in.toLowerCase().includes(searchTerm.toLowerCase()))
    })
 
   
    
    return (
        <>
            <NavBar user={user} setUser={setUser} history={history} setSearchTerm={setSearchTerm} />
            <Switch>
                
                <Route exact path="/home">
                    <HomePage user={user} setUser={setUser} salons={salons} setSalons={setSalons} setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch}  />
                </Route>                
                <Route path="/my-appointments">
                    <MyAppointments appointments={appointments} user={user} setAppointments={setAppointments} />
                </Route>
                <Route path="/salons">
                    <SalonDisplay setSalonInfo={setSalonInfo} salonList={filteredSalons} history={history} />
                </Route>
                <Route path="/salon-info">
                    <SalonPage  setSalonReviews={setSalonReviews} salonReviews={salonReviews} updateReview={updateReview} setReviews={setReviews} reviews={reviews} user={user} history={history} salonInfo={salonInfo} appointments={appointments} setAppointments={setAppointments} />
                </Route>
            </Switch>        
        </>
    )
}

export default MainContent;