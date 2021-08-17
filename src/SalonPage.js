import React from 'react'
import AppointmentForm from './AppointmentForm'
import ReviewForm from './ReviewForm'

function SalonPage({salon, appointments,setAppointments, history, user}) {
    console.log(salon)
    let services = salon.services
 
    // let serviceList;
    // if (salon) {
         const serviceList = salon.services.map(service => {
        return <li>{service.name}</li>
    })
   

    return (
        <>
            {/* Page with salon services and prices */}
            <h1>{salon.name}</h1>
            {/* customer image carousel */}
            <h2>Services:</h2>
            <ul>
                {serviceList}
            </ul>
            <AppointmentForm user={user} history={history} salon={salon} appointments={appointments} setAppointments={setAppointments}/>
            <ReviewForm />
        </>
    )
}

export default SalonPage;