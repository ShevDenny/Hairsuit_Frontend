import {Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import SalonDisplay from './SalonDisplay'
import MyAppointments from './MyAppointments'
import LogIn from './LogIn'
import SignUp from './SignUp'


function MainContent() {

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/salons">
                    <SalonDisplay />
                </Route>
                <Route path="/my-appts">
                    <MyAppointments />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>        
        </>
    )
}

export default MainContent;