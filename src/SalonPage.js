import React, {useState, useEffect} from 'react'
import AppointmentForm from './AppointmentForm'
import ReviewForm from './ReviewForm'
import Reviews from './Reviews'
import Directions from './Directions'
import styled from 'styled-components'



function SalonPage({salonInfo, appointments,setAppointments, history, user}) {
    const [showServices, setShowServices] = useState(false)
    const [salonReviews, setSalonReviews] = useState([])
    console.log(salonInfo)
    console.log(salonReviews)

    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews?token=${token}`, { 
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .then(res => res.json())
        .then(reviewData => {
            let currentReviews = reviewData.filter(rev => rev.salon.id === salonInfo.id)
            console.log(currentReviews)
            setSalonReviews(currentReviews)
           
        })
    },[])
    
    
        if(salonInfo.services === undefined){
        return <a href="http://localhost:2000/home">Please place Search...</a>
    }

         const serviceList = salonInfo.services.map(service => {
        return <li>{service.name}: $ {service.price}</li>
    })


        const reviewList = salonReviews.map(review => {
            return <Reviews key={review.id} review={review} salonReviews={salonReviews} setSalonReviews={setSalonReviews} user={user} salonInfo={salonInfo} />;
        })

   

    

  

    return (

      
            
        <div className="salon-page">
            <h1>{salonInfo.name}</h1>
       
            <div id="left" className="ui card">
                <div className="ui segment">
                    <div className="header">About {salonInfo.name}</div>
                    <br></br>
                        <img className="ui small left floated image" src={salonInfo.image} alt={salonInfo.name} width="350" height="350" />
                    
                    
                    <p>{salonInfo.description}</p>                
                    
                </div>
            </div>
            
            <div id="right" className="ui card">
                <div className="content">
                    <div className="header" onClick={() => setShowServices(!showServices)}>Services</div>
                    {showServices ?
                
                    <div className="description">
                    <ul>
                        <h2></h2>
                        {serviceList} 
                    </ul>              
                    </div>
                    :
                    null
                    }
                </div>
            </div> 
            
            {/* customer image carousel */}
            
            <div id="right" className="ui card">
                <div className="content">
                    <div className="header">Salon Reviews</div>                
                    <div className="description">
                        {reviewList}
                    </div>
                    <ReviewForm salonReviews={salonReviews} setSalonReviews={setSalonReviews} salonInfo={salonInfo} key={user.id} user={user}/>
                </div>
            </div>
            <div className="directions-div">
                <Directions salonInfo={salonInfo} />
            </div>

            <div className="apptform-div">
            <AppointmentForm user={user} history={history} salonInfo={salonInfo} appointments={appointments} setAppointments={setAppointments}/>            
            </div>           
            
        </ div>
       
    )
}

export default SalonPage;