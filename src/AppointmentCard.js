import React from "react"

export default function  AppointmentCard({user, appointment, appointments, setAppointments}){

 
    function cancelAppointment(){
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/appointments/${user.id}/${appointment.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            let updatedAppts = appointments.filter((appt) => appt.id !== appointment.id)
            setAppointments(updatedAppts)
            alert("Appointment Cancelled")
        }) 
      
    }
 


    return (
        <div id="appt-card" className="ui card">
            <div className="content">
                <div className="header">{appointment.salon.name}</div>
                
                <div className="description">
                <p>Salon Address: {appointment.salon.location}</p>
                <p>Appointment Date:{appointment.date}</p> 
                <p>Appointment Time:{appointment.start_time}</p>
                <button onClick={cancelAppointment} >Cancel Appointment</button>
                 {/* <button>Reschedule Appointment</button>    */}
                </div>
            </div>
        </div>
    )
}

