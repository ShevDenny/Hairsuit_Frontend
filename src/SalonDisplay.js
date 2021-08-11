import SalonSearchCard from './SalonSearchCard'


function SalonDisplay({salonList, history}) {
    const salonSearch = salonList.map(salon => {
        return <SalonSearchCard salon={salon}/>
    })

    // function handleClick(){
    //     history.push('/salon-info')
    // }


    return (
        <>
            <div className="salon-card" onClick={() => history.push('/salon-info')}>
                {salonSearch}
            </div>
        </>
    )
}

export default SalonDisplay;