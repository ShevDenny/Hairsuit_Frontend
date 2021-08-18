import React from "react"

export default function  AppointmentCard({user, appointment, appointments, setAppointments}){

    // console.log(appointment.salon)
    



 function cancelAppointment(){
   
      fetch(`http://localhost:3000/appointments/${user.id}/${appointment.id}`, {
          method: 'DELETE'
        })
        .then(() => {
            let updatedAppts = appointments.filter((appt) => appt.id !== appointment.id)
            setAppointments(updatedAppts)
            alert("Appointment Cancelled")
        }) 
      
  }


    return (
        <div className="appt-card">
            <p>Appointment Location:{appointment.salon.name}</p>
            <p>Salon Address: {appointment.salon.location}</p>
            <p>Appointment Date:{appointment.date}</p> 
            <p>Appointment Time:{appointment.start_time}</p>
            <button onClick={cancelAppointment} >Cancel Appointment</button>
            {/* <button>Reschedule Appointment</button>    */}
        </div>
    )
}

