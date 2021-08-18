import AppointmentCard from "./AppointmentCard";


function MyAppointments({appointments, setAppointments, user}) {
   


    console.log(user)
    
    const apptDisplay = user.appointments.map(appointment => {
       
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