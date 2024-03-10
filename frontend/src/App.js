import "./App.scss";
import { LoginScreen } from "./Login/js/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Login/js/Register";
import {Chatscreen} from "./chat/js/Chatscreen";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path='/register' element={<Register />} />
                <Route path='/chats' element={<Chatscreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
