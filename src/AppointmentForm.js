function AppointmentForm() {


    return (
        <div className="appointment">
            <form className="appt-form">
                <input type="text" placeholder="date" />
                <input type="text" placeholder="time" />
                <input type="text" placeholder="reason for visit" />
                <input type="submit" value="Book Now"/>
            </form>
        </div>
    )
}

export default AppointmentForm;