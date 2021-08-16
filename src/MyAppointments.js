import AppointmentCard from "./AppointmentCard";
import React, {useState, useEffect} from 'react'

function MyAppointments({appointments, setAppointments}) {
    const[userInfo, setUserInfo] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:3000/appointments?user_id='1'`)
    //     .then(res => res.json())
    //     .then(userData => setUserInfo(userData))
    // },[])

    // console.log(userInfo.appointments)

    console.log(appointments)
    
    const apptDisplay = appointments.map(appointment => {
       
        return (
        <AppointmentCard key={appointment.id} appointment={appointment} appointments={appointments} setAppointments={setAppointments}/>
        )
    })


    return (
        <>
        <h2>My Appointments</h2>
            {apptDisplay}
     
        </>
    )
}

export default MyAppointments;