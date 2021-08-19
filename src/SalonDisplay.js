import SalonSearchCard from './SalonSearchCard'


function SalonDisplay({setSalonInfo, salonList, history}) {

   
    const salonSearch = salonList.map(salon => {
        return <SalonSearchCard key={salon.id} salon={salon} history={history} setSalonInfo={setSalonInfo}/>
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