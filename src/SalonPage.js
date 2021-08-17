import React from 'react'
import AppointmentForm from './AppointmentForm'
import ReviewForm from './ReviewForm'

function SalonPage({salonInfo, appointments,setAppointments, history, user}) {

         const serviceList = salonInfo.services.map(service => {
        return <li>{service.name}: $ {service.price}</li>
    })

    console.log(salonInfo)
   

    return (
        <>
            {/* Page with salon services and prices */}
            <h1>{salonInfo.name}</h1>
            <img src={salonInfo.image} alt={salonInfo.name} width="500" height="500" />
            {/* customer image carousel */}
           
            <ul>
                <h2>Services:</h2>
                {serviceList} 
            </ul>
            <p>{salonInfo.description}</p>
            <AppointmentForm user={user} history={history} salonInfo={salonInfo} appointments={appointments} setAppointments={setAppointments}/>
            {/* <ReviewForm /> */}
        </>
    )
}

export default SalonPage;