

function SalonSearchCard({salon, history,setSalon}){

    function handleClick(){
        console.log(salon.id)
        let id = salon.id
        fetch(`http://localhost:3000/salons/${id}`)
        .then(res => res.json())
        .then(salonData => setSalon(salonData))
        history.push('/salon-info')
    }


    return (
        <div onClick={handleClick} >
            <h2>Salon Name:{salon.name}</h2>
            <img src="" alt=""/>
            <p>Salon Locatiion:{salon.location}</p>
        </div>
    )
}
export default SalonSearchCard;