import AppointmentCard from "./AppointmentCard";
import React, {useState, useEffect} from 'react'

function MyAppointments({appointments, setAppointments, user}) {
   


    console.log(appointments)
    
    const apptDisplay = appointments.map(appointment => {
       
        return (
        <AppointmentCard key={appointment.id} user={user} appointment={appointment} appointments={appointments} setAppointments={setAppointments}/>
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