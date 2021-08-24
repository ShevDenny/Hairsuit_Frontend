import React from "react"
import styled from 'styled-components'

const DisplaySalons = styled.div`

    #salon-cards {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        padding: 5%;
    }

`


function SalonSearchCard({salon, history, setSalonInfo}){

    function handleClick(){        
        
            console.log(salon.id)
            let id = salon.id
            const token = localStorage.getItem('token')
            fetch(`http://localhost:3000/salons/${id}`, {
                headers: { 
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(salonData => {
                console.log(salonData)
                setSalonInfo(salonData)
                history.push('/salon-info')        
            })
    }
  


    return (
        <DisplaySalons>

        <div id="salon-cards" className="ui special cards">
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
                <div className="extra content">
                <p>{salon.description}</p>
                </div>
            </div>
        </div>

        </DisplaySalons>
    )
}
export default SalonSearchCard;

