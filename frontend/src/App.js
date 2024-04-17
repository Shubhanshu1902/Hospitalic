import "./App.scss";
import { LoginScreen } from "./Login/js/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Login/js/Register";
import {Chatscreen} from "./chat/js/Chatscreen";
import Dash from "./dashboard/js/Dash";
import Appscreen from "./appointments/js/Appscreen";
import { ReportAdd } from "./Lab/js/ReportAdd";
import { LabDashboard } from "./Lab/js/LabDashboard";

function App() {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path='/register' element={<Register />} />
                <Route path='/chats' element={<Chatscreen />} />
                <Route path='/dashboard' element={<Dash />} />
                <Route path='/appointments' element={<Appscreen />} />
                <Route path='/addReport/:patientId' element={<ReportAdd />} />
                <Route path='/labdashboard' element={<LabDashboard />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;