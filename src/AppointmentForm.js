import Calendar from 'react-calendar';
import {useState} from 'react'
import 'react-calendar/dist/Calendar.css'



function AppointmentForm({appointments, setAppointments}) {
    const[date, setDate] = useState('')
    const[time, setTime] = useState('')
    const[description, setDescription] = useState('')
   

    // const ReactCalendar = () => {
    //     const [date, setDate] = useState(new Date());
        
    //     const onChange = (date) => {
    //         setDate(date)
    //     }
      
    //     return (
    //         <div> 
    //             <Calendar onChange={onChange} value={date} /> 
                
    //         </div>
    //     )
    //   }

    function handleSubmit(e){
        e.preventDefault()
        console.log("form data")
        let newAppointment = {
            date,
            start_time: time,
            description
        }
        fetch('https://example.com/profile', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAppointment),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
 
        // fetch(`http://localhost:3000/appointments`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'  
        //     },
        //     body: JSON.stringify(new_appointment)
        // })
        // .then(res => res.json())
        // .then(apptData => setAppointments([...appointments, apptData])) 
    }


      
      
    return (

        <div className="appointment">
            {/* <ReactCalendar /> */}
            <form className="appt-form" onSubmit={handleSubmit}>
                <input type="date" placeholder="Select a date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="time" placeholder="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                <input type="text" placeholder="reason for visit" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" value="Book Now"/>
            </form>
        </div>
    )
}

export default AppointmentForm;