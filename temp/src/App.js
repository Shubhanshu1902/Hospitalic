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
    faFolder,
    faGear,
    faLock,
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
import { Page404 } from "./Page404";
import { Reports } from "./Reports/Reports";

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
        faFolder
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

                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
