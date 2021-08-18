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
            <h1>{salonInfo.name}</h1>
            <img src={salonInfo.image} alt={salonInfo.name} width="350" height="350" />
            <div class="ui card">
                <div class="content">
                    <div class="header">About {salonInfo.name}</div>
                    {/* <div class="meta">2 days ago</div> */}
                    <div class="description">
                    <p>{salonInfo.description}</p>                
                    </div>
                </div>
            </div>
            <div class="ui card">
                <div class="content">
                    <div class="header">Services</div>
                
                    <div class="description">
                    <ul>
                        <h2></h2>
                        {serviceList} 
                    </ul>              
                    </div>
                </div>
            </div>
            {/* Page with salon services and prices */}
            {/* customer image carousel */}
            
            <div>

            </div>
           
            <AppointmentForm user={user} history={history} salonInfo={salonInfo} appointments={appointments} setAppointments={setAppointments}/>
            {/* <ReviewForm /> */}
        </>
    )
}

export default SalonPage;