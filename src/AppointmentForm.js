import Calendar from 'react-calendar';
import React, {useState} from 'react'
import 'react-calendar/dist/Calendar.css'
import TextField from '@material-ui/core/TextField'
// import 'date-fns';
import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



function AppointmentForm({appointments, setAppointments, salonInfo, history, user}) {
    const[date, setDate] = useState(new Date(''))
    const[endTime, setEndTime] = useState('')
    const[time, setTime] = useState('')
    const[description, setDescription] = useState('')
    const[errors, setErrors] = useState(null)
   

    
   

    async function handleSubmit(e){
        e.preventDefault();
        
        const newAppointment = {
            date: date,
            start_time: time,
            description,
            user_id: user.id,
            salon_id: salonInfo.id
        };
        console.log(newAppointment)
        // const user = localStorage.getItem("user")
        const res = await fetch(`http://localhost:3000/appointments?user_id=${user.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'  
            },
            body: JSON.stringify(newAppointment)
        });
        if (res.ok) {
            console.log(res)

            const json = await res.json();
            setAppointments([...appointments, json]);
            alert("Appointment booked!")
            history.push(`/my-appointments`)
        } else {
            const errors = await res.json();
            setErrors(errors.errors)
        }
      
    }


   

  

  
    
      
      
    return (

        <div className="appointment">            
           
            <form className="" noValidate onSubmit={handleSubmit}>
                <h2>Book an Appointment</h2>
                <TextField
                    id="date-picker"
                    label="Appointment Date"
                    type="date"
                    format="MM/dd/yyyy"
                    margin="normal"
                    // defaultValue="2017-05-24"
                    className=""
                    required
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    
                />
                <TextField
                    id="time"
                    label="Appointment Time"
                    type="time"
                    margin="normal"
                    // defaultValue="07:30"
                    className=""
                    required
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300,
                    }}
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                />
                <TextField
                    id="desc"
                    label="Reason for Visit"
                    type="text"
                    margin="normal"
                    className=""
                    required
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" margin="normal">Book</button>

            </form>
            {errors ? errors.map(error => <div>{error}</div>) : null}
     
        </div>
    )
}



export default AppointmentForm;