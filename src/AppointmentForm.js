import Calendar from 'react-calendar';
import {useState} from 'react'
import 'react-calendar/dist/Calendar.css'



function AppointmentForm() {

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

      
      
    return (

        <div className="appointment">
            {/* <ReactCalendar /> */}
            <form className="appt-form">
                <input type="date" placeholder="Select a date" />
                <input type="time" placeholder="time" />
                <input type="text" placeholder="reason for visit" />
                <input type="submit" value="Book Now"/>
            </form>
        </div>
    )
}

export default AppointmentForm;