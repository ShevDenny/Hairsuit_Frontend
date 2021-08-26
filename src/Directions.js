import React, {useState} from 'react'
import parse from 'html-react-parser'

function Directions({salonInfo}){
    const [locationDirections, setLocationDirections] = useState([])
    const [directionsForm, setDirectionsForm] = useState(false)
    const [start, setStart] = useState('')

    const directionsDisplay = locationDirections.map((step) => {
        console.log(step.html_instructions);
        return <p>{step.html_instructions}</p>
    }) 

    if(!locationDirections) {
        return directionsDisplay
    }



    // const filteredSteps = directionsDisplay.filter(directions => directions)
    // console.log(filteredSteps)


    // const boo = "<b>booooo</b>"
    // console.log(boo)

    // console.log(appointment)
   

    function getDirections(e){
        e.preventDefault()

        let origin = start
        let destination = salonInfo.location
        let API = ''
        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${origin}&key=${API}`)
        .then(res => res.json())
        .then(originData => {
            let originPlace_id = originData.results[0].place_id
            console.log(originPlace_id)
            fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${destination}&key=${API}`)
            .then(res => res.json())
            .then(destinationData => {
                let destinationPlace_id = destinationData.results[0].place_id
                console.log(destinationPlace_id)
                fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${originPlace_id}&destination=place_id:${destinationPlace_id}&key=${API}`)
                .then(res => res.json())
                .then(directionData => {
                    console.log(directionData)
                    console.log(directionData.routes[0])
                    let directions = directionData.routes[0].legs[0].steps
                    setLocationDirections(directions)
                })               

            })
            
        })
    }


    return (
        <div className="directions-div">
        <button classname="directions-btn" onClick={() => setDirectionsForm(!directionsForm)}>Click for Directions</button>
        {directionsForm ?
        <form onSubmit={getDirections}>
            <input type="text" placeholder="Enter starting Address" value={start} onChange={(e) => setStart(e.target.value)} />
            <button className="directions-btn">Get Directions</button>

        </form>
        :
        null
        }          
            
          {/* {parse(directionsDisplay)} */}
        {/* <div>
              let dir = locationDirections.map((step) => {
            console.log(step.html_instructions);
            return <p>{step.html_instructions}</p>
              })
        </div> */}
          


        </div>

    )
}

export default Directions;