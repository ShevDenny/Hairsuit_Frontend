import AppointmentCard from "./AppointmentCard";



function MyAppointments({appointments, setAppointments, user}) {
    let today = new Date();

    const sortedAppts = appointments.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
    })

   console.log(sortedAppts)


   const filteredAppts = appointments.filter(appt => appt.date < today)



    console.log(filteredAppts)
    
    const apptDisplay = sortedAppts.map(appointment => {
       
        return (
        <AppointmentCard today={today} user={user} key={appointment.id} appointment={appointment} appointments={appointments} setAppointments={setAppointments}/>
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