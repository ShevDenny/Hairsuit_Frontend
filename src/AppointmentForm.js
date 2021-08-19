import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'



function AppointmentForm({appointments, setAppointments, salonInfo, history, user}) {
    const[date, setDate] = useState(new Date())
    const[endTime, setEndTime] = useState('')
    const[time, setTime] = useState('')
    const[description, setDescription] = useState('')
    const[errors, setErrors] = useState(null)

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today =  yyyy + mm + dd;

    console.log(today)
   

    
   

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
                <TextField type="submit" value="Book" margin="normal" />

            </form>
            {errors ? errors.map(error => <div>{error}</div>) : null}
     
        </div>
    )
}



export default AppointmentForm;