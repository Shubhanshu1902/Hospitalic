import React, { useState } from "react";
import "../css/LoginScreen.scss";
import main_logo from "../../icons/main_icon.png";
import { LoginOptions } from "./LoginOptions";
// import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RegisterCall } from "../../connections/Register";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const login_types = ["Patient", "Doctor", "Lab", "Radiologist"];
    const [gender, setGender] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [Password, setPassword] = useState("");
    let navigate = useNavigate()

    const register = () => {
        RegisterCall(
        email,
        Password,
        fname,
        lname,
        gender,
        startDate,
        Address,
        1
        )
        
        let path = "/"
        navigate(path)
    };

    return (
        <div className="Login">
            <div className="options">
                <div className="title1">
                    Sign in To
                    <img src={main_logo} alt="main_logo" />
                </div>

                {login_types.map((s, i) => (
                    <LoginOptions key={i} type={s} />
                ))}
            </div>

            <div className="register-box">
                <div className="title1">Register as Patient</div>

                <div className="try">
                    First Name
                    <input
                        placeholder="First Name"
                        onChange={a => setFname(a.target.value)}
                    />
                </div>

                <div className="try">
                    Last Name
                    <input
                        placeholder="Last Name"
                        onChange={a => setLname(a.target.value)}
                    />
                </div>

                <div className="try">
                    Email
                    <input
                        placeholder="Email"
                        onChange={a => setEmail(a.target.value)}
                    />
                </div>

                <div className="try2">
                    <div className="gender">
                        Gender
                        <select
                            value={gender}
                            onChange={a => setGender(a.target.value)}
                        >
                            <option value="" disabled selected hidden>
                                Select
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="gender">
                        Date Of Birth
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </div>
                </div>

                <div className="try" onChange={a => setAddress(a.target.value)}>
                    Address
                    <input placeholder="Address" />
                </div>

                <div
                    className="try"
                    onChange={a => setPassword(a.target.value)}
                >
                    Password
                    <input placeholder="Password" />
                </div>

                <div className="register" onClick={register}>
                    Register
                </div>
            </div>
        </div>
    );
};
