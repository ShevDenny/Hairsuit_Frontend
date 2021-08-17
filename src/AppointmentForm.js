import Calendar from 'react-calendar';
import React, {useState} from 'react'
import 'react-calendar/dist/Calendar.css'
import TextField from '@material-ui/core/TextField'



function AppointmentForm({appointments, setAppointments, salon, history, user}) {
    const[date, setDate] = useState('')
    const[endTime, setEndTime] = useState('')
    const[time, setTime] = useState('')
    const[description, setDescription] = useState('')
   

    async function handleSubmit(e){
        e.preventDefault();
        
        const newAppointment = {
            date: date,
            start_time: time,
            description,
            user_id: user.id,
            salon_id: salon.id
        };
        console.log(newAppointment)
        const res = await fetch(`http://localhost:3000/appointments`, {
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
            console.log(errors.errors)
        }
      
    }


      
      
    return (

        <div className="appointment">
            {/* <ReactCalendar /> */}
            <form className="" noValidate onSubmit={handleSubmit}>
                <TextField
                    id="date"
                    label="Appointment Date"
                    type="date"
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
                    className=""
                    required
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />

            </form>
     
        </div>
    )
}



export default AppointmentForm;