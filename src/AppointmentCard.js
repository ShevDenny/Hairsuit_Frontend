import React, {useState} from "react"
import dateFormat from 'dateformat';
import moment from 'moment';
import styled from 'styled-components'

const Appt = styled.div` 
    .delete-btn {

    }



`



export default function  AppointmentCard({today, user, appointment, appointments, setAppointments}){
    const [upcoming, setUpcoming] = useState([])
    const [past, setPast] = useState([])
    console.log(appointment)

    // let filteredAppts = appointment.filter(appt => appt.date > today)
    // console.log(filteredAppts)

  

 
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
                <p><b>Address:</b> {appointment.salon.location}</p>
                <p><b>Date:</b> {dateFormat(appointment.date, "dddd, mmmm dS, yyyy")}</p> 
                <p><b>Time:</b> {moment(appointment.start_time).format("LT")}</p>
                <button className="ui button" onClick={cancelAppointment} >Cancel Appointment</button>
               
                 {/* <button>Reschedule Appointment</button>    */}
                </div>
            </div>
        </div>
    )
}

