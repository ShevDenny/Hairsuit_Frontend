import React, {useEffect} from "react"


function SalonSearchCard({salon, history, setSalonInfo}){

    function handleClick(){        
        
            console.log(salon.id)
            let id = salon.id
            fetch(`http://localhost:3000/salons/${id}`)
            .then(res => res.json())
            .then(salonData => {
                console.log(salonData)
                setSalonInfo(salonData)
                history.push('/salon-info')        
            })
    }
  


    return (
        
       



        <div className="ui special cards">
        <div className="card" onClick={handleClick}>
            <div className="blurring dimmable image">
            <div className="ui dimmer">
                <div className="content">
                <div className="center">
                    <div className="ui inverted button">Go To Salon</div>
                </div>
                </div>
            </div>
            <img src={salon.image} alt={salon.name}  width="350" height="400"/>
           
            </div>
            <div className="content">
            <h2 className="header">{salon.name}</h2>
            <div className="meta">
                <span className="location">Address:{salon.location}</span>
            </div>
            </div>
            <div class="extra content">
            <p>{salon.description}</p>
            </div>
        </div>
    </div>



        // <div onClick={handleClick} >
        //     <h2></h2>
            
        //     <p>Address:{salon.location}</p>
        //     
        // </div>
    )
}
export default SalonSearchCard;

