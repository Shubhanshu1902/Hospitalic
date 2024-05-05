import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "./Login/LoginScreen";
import { Register } from "./Login/Register";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowAltCircleRight,
    faArrowRight,
    faArrowRightLong,
    faBell,
    faCalendarAlt,
    faEnvelope,
    faFile,
    faFolder,
    faGear,
    faLock,
    faPaperPlane,
    faPhone,
    faReceipt,
    faRightFromBracket,
    fas,
    faTasks,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGoogle,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Dashboard } from "./dashboard/Dashboard";
import { Appointment } from "./Appointments/Appointment";
import { Reports } from "./Reports/Reports";
import { ReportsFile } from "./Reports/ReportsFile";
import { ReportChat } from "./ChatScreen/ReportChat";
import { Page404 } from "./Page404/Page404";
import PatHis from "./DoneAppointments/PatHis";

function App() {
    library.add(
        fas,
        faArrowRightLong,
        faFacebook,
        faGoogle,
        faLinkedin,
        faEnvelope,
        faLock,
        faGear,
        faPhone,
        faReceipt,
        faTasks,
        faCalendarAlt,
        faBell,
        faRightFromBracket,
        faArrowAltCircleRight,
        faFolder,
        faFile,
        faPaperPlane
    );

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/:type/dashboard" element={<Dashboard />} />
                    <Route path="/:type/appointments" element={<Appointment />} />
                    <Route path="/:type/reports" element={<Reports />} />
                    <Route path="/:type/reports/:userid" element={<ReportsFile />} />
                    <Route path="/:type/report/:reportid" element={<ReportChat />}/>
                    <Route path="/:type/doneappointments" element={<PatHis />}/>

                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
