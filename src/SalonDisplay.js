import SalonSearchCard from './SalonSearchCard'


function SalonDisplay({setSalon, salonList, history}) {
    const salonSearch = salonList.map(salon => {
        return <SalonSearchCard key={salon.id} salon={salon} history={history} setSalon={setSalon}/>
    })


    return (
        <>
            <div className="salon-card" >
                {salonSearch}
            </div>
        </>
    )
}

export default SalonDisplay;