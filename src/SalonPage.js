
import AppointmentForm from './AppointmentForm'

function SalonPage({salon, appointments,setAppointments}) {
    console.log(salon)
    let services = salon.services
    console.log(services)
    // const serviceList = services.map(service => {
    //     return <li>{service.name}</li>
    // })
    // let serviceDisplay = services.map(service => {
    //     return (
    //         <li>service: {service.name}</li>
    //         // <li>Price: ${service.price}</li>
    //     )
    // })

    // const salonServices = salon.services.map(service => {
    //     return (
    //         <li>service</li>
    //     )
    // })

    return (
        <>
            {/* Page with salon services and prices */}
            <h1>{salon.name}</h1>
            {/* customer image carousel */}
            <ul>
                {/* {serviceList} */}
            </ul>
            <AppointmentForm appointments={appointments} setAppointments={setAppointments}/>
        </>
    )
}

export default SalonPage;