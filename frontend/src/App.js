import "./App.scss";
import { LoginScreen } from "./Login/js/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Login/js/Register";
import {Chatscreen} from "./chat/js/Chatscreen";
import { Dashboard } from "./Patient/Dashboard/Dashboard";
import { ReportScreen } from "./Patient/Reports/ReportScreen";
import { RadioDashboard } from "./Radiologist/Dashboard/Dashboard";
import { DocDashboard } from "./Doctor/Dashboard/Dashboard";
import { DocAppointments } from "./Doctor/Appointment/Appointments";
import { DocReportScreen } from "./Doctor/Report/ReportScreen";
import { RadReportScreen } from "./Radiologist/Report/ReportScreen";
import Appscreen from "./Patient/Appointment/Appscreen";
import { LabDashboard } from "./Lab/Dashboard/LabDashboard";
import { Tasks } from "./Lab/Tasks/Tasks";
import { ReportsLab } from "./Lab/Reports/ReportsLab";
import { AllReportLab } from "./Lab/Reports/AllReportLab";
import PatHis from "./Patient/History/PatHis";


function App() {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path='/register' element={<Register />} />

                {/* DOCTOR */}
                <Route path='/doctor/dashboard' element={<DocDashboard />} />
                <Route path='/doctor/chats/:reportId' element={<Chatscreen />} />
                <Route path='/doctor/appointments' element={<DocAppointments />} />
                <Route path='/doctor/reports' element={<DocReportScreen />} />


                {/* PATIENT */}
                <Route path='/patient/dashboard' element={<Dashboard />} />
                <Route path='/patient/appointments' element={<Appscreen />} />
                <Route path='/patient/reports' element={<ReportScreen />} />
                <Route path='/patient/history' element={<PatHis />} />

                

                {/* LAB */}
                <Route path='/lab/dashboard' element={<LabDashboard />} />
                <Route path='/lab/tasks' element={<Tasks />} />
                <Route path='/lab/reports' element={<ReportsLab />} />
                <Route path='/lab/reports/:id' element={<AllReportLab />} />

                {/* RADIOLOGIST */}
                <Route path='/radiologist/dashboard' element={<RadioDashboard />} />
                <Route path='/radiologist/dashboard' element={<RadReportScreen />} />

                

            </Routes>
        </BrowserRouter>
    );
}

export default App;
