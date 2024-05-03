import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import Doctors from '../pages/Doctors/Doctors';
import Doctordetails from '../pages/Doctors/Doctordetails';
import Myaccount from '../Dashboard/user-dash/Myaccount';
import Dash from '../Dashboard/doctor-dash/Dash';
import {Routes, Route} from 'react-router-dom';
import Protected from "./Protected";

const Routers = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Signup/>} />
            <Route path="/doctors" element={<Doctors/>} />
            <Route path="/doctors/:id" element={<Doctordetails/>} />
            <Route path="/users/profile/me" element={<Protected allowed={['patient']}><Myaccount /></Protected>}/>
            <Route path="/doctors/profile/me" element={<Protected allowed={['doctor']}><Dash /></Protected>}/>
        </Routes>
    );
};
export default Routers;