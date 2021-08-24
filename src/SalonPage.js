import React, {useState, useEffect} from 'react'
import AppointmentForm from './AppointmentForm'
import ReviewForm from './ReviewForm'
import Reviews from './Reviews'
import Directions from './Directions'
import styled from 'styled-components'

const SalonDisplay = styled.div` 



`



function SalonPage({ setSalonReviews, salonReviews, updateReview, reviews, setReviews, salonInfo, appointments,setAppointments, history, user}) {
    const [showServices, setShowServices] = useState(false)
    // const [salonReviews, setSalonReviews] = useState([])
    console.log(salonInfo)
    // console.log(salonInfo)
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews`, { 
            headers: { 
                'Authorization': `Bearer ' ${token}`,
            },
        })
        .then(res => res.json())
        .then(data => {
            let salonRevs = data.filter(review => review.salon.id === salonInfo.id)
            setSalonReviews(salonRevs)
        })
    },[])

    

    // setSalonReviews(salonRevs)
    
    
        if(salonInfo.services === undefined){
        return <a href="http://localhost:2000/home">Please place Search...</a>
    }

    const serviceList = salonInfo.services.map(service => {
        return <li>{service.name}: $ {service.price}</li>
    })


    const reviewList = salonReviews.map(review => {
            return <Reviews salonReviews={salonReviews} setSalonReviews={setSalonReviews} key={review.id} review={review} setReviews={setReviews} user={user} salonInfo={salonInfo} />;
    })



   


    return (
        <SalonDisplay>

        

      
            
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
            
            <div className="ui card">
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
            
            
            <div id="right" className="">
                <div className="content">
                    <div className="header">Salon Reviews</div>                
                    <div className="description">
                        {reviewList}
                    </div>
                    <ReviewForm updateReview={updateReview} reviews={reviews} setReviews={setReviews} salonInfo={salonInfo} key={user.id} user={user}/>
                </div>
            </div>
            <div className="directions-div">
                <Directions salonInfo={salonInfo} />
            </div>

            <div className="apptform-div">
            <AppointmentForm user={user} history={history} salonInfo={salonInfo} appointments={appointments} setAppointments={setAppointments}/>            
            </div>           
            
        </ div>
    </SalonDisplay>  
    )
}

export default SalonPage;