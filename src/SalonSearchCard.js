import React from "react"

function SalonSearchCard({salon, history,setSalon}){

    function handleClick(){
        console.log(salon.id)
        let id = salon.id
        fetch(`http://localhost:3000/salons/${id}`)
        .then(res => res.json())
        .then(console.log)
        .then(salonData => setSalon(salonData))
        history.push('/salon-info')
    }
  


    return (
        <div onClick={handleClick} >
            <h2>Salon Name:{salon.name}</h2>
            <img src={salon.image} alt={salon.name} width="300" height="450"/>
            <p>Salon Locatiion:{salon.location}</p>
        </div>
    )
}
export default SalonSearchCard;