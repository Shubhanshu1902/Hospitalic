import "./App.scss";
import { LoginScreen } from "./Login/js/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Login/js/Register";
import {Chatscreen} from "./chat/js/Chatscreen";
import Dash from "./dashboard/js/Dash";
import Appscreen from "./appointments/js/Appscreen";
import { ReportAdd } from "./Lab/js/ReportAdd";
import { LabDashboard } from "./Lab/js/LabDashboard";
import { Tasks } from "./Lab/js/Tasks";

function App() {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path='/register' element={<Register />} />

                {/* DOCTOR */}
                <Route path='/doctor/dashboard' element={<Dash />} />
                <Route path='/doctor/chats/:reportId' element={<Chatscreen />} />


                {/* PATIENT */}
                <Route path='/patient/dashboard' element={<Dash />} />
                <Route path='/patient/appointments' element={<Appscreen />} />

                {/* LAB */}
                <Route path='/addReport/:appointmentId' element={<ReportAdd />} />
                <Route path='/lab/dashboard' element={<LabDashboard />} />
                <Route path='/lab/tasks' element={<Tasks />} />

                {/* RADIOLOGIST */}
                <Route path='/radiologist/dashboard' element={<Dash />} />



            </Routes>
        </BrowserRouter>
    );
}

export default App;