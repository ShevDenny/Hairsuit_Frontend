import React from "react"
import dateFormat from 'dateformat';
import moment from 'moment';


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
 
    // console.log(moment(appointment.start_time).format("LT"))


    return (
        <div id="appt-card" className="ui card">
            <div className="content">
                <div className="header">{appointment.salon.name}</div>
                
                <div className="description">
                <p>Salon Address: {appointment.salon.location}</p>
                <p>Date: {dateFormat(appointment.date, "dddd, mmmm dS, yyyy")}</p> 
                <p>Time: {moment(appointment.start_time).format("LT")}</p>
                <button onClick={cancelAppointment} >Cancel Appointment</button>
               
                 {/* <button>Reschedule Appointment</button>    */}
                </div>
            </div>
        </div>
    )
}

