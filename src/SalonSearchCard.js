import React from "react"
import styled from 'styled-components'

const DisplaySalons = styled.div`

    #salon-dets {
        // display: block;
        // margin-left: auto;
        // margin-right: auto;
        width: 100%;        
        height: 400px;
        overflow: auto;
    }
    #salon-cards {
        // width: 1000px;
        padding: 5%;
        float: left;
        margin-right: -90 px;
        margin-left: 70px;
        cursor: pointer;
   
        
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
            
                </div>
                <div id="salon-dets" className="content"> 
                    <h2 className="header">{salon.name}</h2>
                    <br></br>
                    <img src={salon.image} alt={salon.name}  width="250" height="300"/>
                    <br></br>
                <div className="meta">
                    <span className="location"><b>Address:</b> {salon.location}</span>
                </div>
                <div className="extra content">
                    <p>{salon.description}</p>
                </div>
                </div>
            </div>
        </div>

        </DisplaySalons>
    )
}
export default SalonSearchCard;

