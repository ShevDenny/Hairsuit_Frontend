import React, {useState, useEffect} from 'react'
import AppointmentForm from './AppointmentForm'
import ReviewForm from './ReviewForm'
import Reviews from './Reviews'
import styled from 'styled-components'
import Directions from './Directions'

const SalonDisplay = styled.div` 
#reviews {
    width: 60%;
    height: 200px;
    overflow: scroll;
    background-color: white;
    // color: white;
    margin-left: auto;
    margin-right: auto;
    padding: 2%;
}

.header {
    float: center;
    font-size: 20px;
}
.salon-name {
    padding: 2%;
}
.rev-div {
    padding: 2%;
    margin-top: 5%
}
.salon-img {
    float: left;
    padding:2%;
    margin-left: 5%
}
#about {
    padding: 2%;
    margin: 5%;
    height: 300px
}
#services {
    margin-top: 15%;
    margin-right: 40%;
    margin-left: 35%;
    cursor: pointer;
}

.apptform-div {
    cursor: pointer;
}

#appt-btn {
    width: 30%;
    height: 30%;
    font-size: 
}


`



function SalonPage({ setSalonReviews, salonReviews, updateReview, reviews, setReviews, salonInfo, appointments,setAppointments, history, user}) {
    const [showServices, setShowServices] = useState(false)
    const [apptForm, setApptForm] = useState(false)

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
            <h1 className="salon-name" >{salonInfo.name}</h1>
            <img className="salon-img" src={salonInfo.image} alt={salonInfo.name} width="450" height="550" />
            <div id="about" className="">
                <div className="">
                    <div className="header">About {salonInfo.name}</div>
                    <br></br>                    
                    <p>{salonInfo.description}</p>               
                </div>
            </div>
            
            <div className="apptform-div">
                <button className="ui button" id="appt-btn" onClick={() => setApptForm(!apptForm)}>Book an Appointment</button>
                {apptForm ?
                <AppointmentForm user={user} history={history} salonInfo={salonInfo} appointments={appointments} setAppointments={setAppointments}/> 
                :
                null        
                }

            </div>          
            <div id="services" className="ui card">
                <div className="content">
                    <div className="header" onClick={() => setShowServices(!showServices)}>Services & Pricing</div>
                    {showServices ?
                
                    <div className="description">
                    <ul>
                        
                        {serviceList} 
                    </ul>              
                    </div>
                    :
                    null
                    }
                </div>
            </div> 
            
            

            <div  className="rev-div">
                <div className="header"><b>Customer Reviews</b></div>
                <br></br>
                <div  id="reviews" className="content">
                                  
                    <div  className="description">
                        {reviewList}
                    </div>
                    <br></br>
                    <br></br>
                    <ReviewForm updateReview={updateReview} reviews={reviews} setReviews={setReviews} salonInfo={salonInfo} key={user.id} user={user}/>
                </div>
            </div>
            <div className="addy">
                <p>{salonInfo.location}</p>
                <Directions />

            </div>
            
        </ div>
    </SalonDisplay>  
    )
}

export default SalonPage;