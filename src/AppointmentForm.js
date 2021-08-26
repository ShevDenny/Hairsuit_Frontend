import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'

const RevForm = styled.div` 



`



function AppointmentForm({appointments, setAppointments, salonInfo, history, user}) {
    const[date, setDate] = useState(new Date())
    const[time, setTime] = useState("default")
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

        const token = localStorage.getItem('token')
        const res = await fetch(`http://localhost:3000/appointments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newAppointment)
        });
        if (res.ok) {
            // console.log(res)

            const json = await res.json();
            setAppointments([...appointments, json]);
            // alert("Appointment booked!")
            history.push(`/my-appointments`)
        } else {
            const errors = await res.json();
            setErrors(errors.errors)
        }
      
    }


   
      
    return (
        <RevForm >

        <div className="appointment">            
           
            <form className="" noValidate onSubmit={handleSubmit}>
                
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
                {/* <TextField
                    id="select"
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
                /> */}

                <TextField id="select" label="Appointment Time" margin="normal" InputLabelProps={{ shrink: true, }} inputProps={{ step: 300, }} value={time} onChange={(e) => setTime(e.target.value)} select>
                    <MenuItem value="default" disabled>Select Time</MenuItem>
                    <MenuItem value="3:30pm">10:30am</MenuItem>
                    <MenuItem value="4:00pm">11:00am</MenuItem>
                    <MenuItem value="4:30pm">11:30am</MenuItem>
                    <MenuItem value="5:00pm">12:00pm</MenuItem>
                    <MenuItem value="5:30pm">12:30pm</MenuItem>
                    <MenuItem value="6:00pm">1:00pm</MenuItem>
                    <MenuItem value="6:30pm">1:30pm</MenuItem>
                    <MenuItem value="7:00pm">2:00pm</MenuItem>
                    <MenuItem value="7:30pm">2:30pm</MenuItem>
                    <MenuItem value="8:00pm">3:00pm</MenuItem>
                    <MenuItem value="9:30pm">3:30pm</MenuItem>
                    <MenuItem value="10:00pm">4:00pm</MenuItem>
                    <MenuItem value="11:30pm">4:30pm</MenuItem>
                    <MenuItem value="12:00pm">5:00pm</MenuItem>
                    <MenuItem value="12:30am">5:30pm</MenuItem>
                    <MenuItem value="1:00am">6:00pm</MenuItem>
                </TextField>
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


                {/* <div class="ui form">
                    <div class="field">
                        <label>Pick a date</label>
                        <input type="text" />
                        <label>Time</label>
                        <input 
                            type="text" 
                            placeholder="Select Time" 
                            id="select" 
                            value={time} onChange={(e) => setTime(e.target.value)}
                        />
                        <select value="default" disabled>Select Time >
                            <MenuItem value="3:30pm">10:30am</MenuItem>
                            <MenuItem value="4:00pm">11:00am</MenuItem>
                            <MenuItem value="4:30pm">11:30am</MenuItem>
                            <MenuItem value="5:00pm">12:00pm</MenuItem>
                            <MenuItem value="5:30pm">12:30pm</MenuItem>
                            <MenuItem value="6:00pm">1:00pm</MenuItem>
                            <MenuItem value="6:30pm">1:30pm</MenuItem>
                            <MenuItem value="7:00pm">2:00pm</MenuItem>
                            <MenuItem value="7:30pm">2:30pm</MenuItem>
                            <MenuItem value="8:00pm">3:00pm</MenuItem>
                            <MenuItem value="9:30pm">3:30pm</MenuItem>
                            <MenuItem value="10:00pm">4:00pm</MenuItem>
                            <MenuItem value="11:30pm">4:30pm</MenuItem>
                            <MenuItem value="12:00pm">5:00pm</MenuItem>
                            <MenuItem value="12:30am">5:30pm</MenuItem>
                            <MenuItem value="1:00am">6:00pm</MenuItem>
                        </select>

                        <label>Brief Reason for Visit</label>
                        <input
                            className=""
                            required
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value) 
                        />
                        
                    </div>
                </div>  */}
        
            {errors ? errors.map(error => <div>{error}</div>) : null}
     
        </div>
        
        </RevForm> 
    )
}



export default AppointmentForm;