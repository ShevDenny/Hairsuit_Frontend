import AppointmentCard from "./AppointmentCard";



function MyAppointments({appointments, setAppointments, user}) {

   


    console.log(appointments)
    
    const apptDisplay = appointments.map(appointment => {
       
        return (
        <AppointmentCard user={user} key={appointment.id} appointment={appointment} appointments={appointments} setAppointments={setAppointments}/>
        )
    })




    return (
        <div>
            <h2 className="appt-header">My Appointments</h2>
            {apptDisplay}

           
           
        
            
     
        </div>
    )
}

export default MyAppointments;