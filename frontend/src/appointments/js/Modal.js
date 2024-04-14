import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import { BookAppointment } from '../../connections/Appointment';
import { GetAllDoctor } from '../../connections/Appointment';

const docopt = [
    {value: "shubhanshu", label:"Dr.Shubhanshu"},
    {value: "naitik", label:"Dr.Naitiksinh"},
    {value: "vatsal", label:"Dr.Vatsal"},
    {value: "vaibhav", label:"Dr.Vaibhav"},
    {value: "arin", label:"Dr.Arin"},
];

// var list;
// var data = Promise.resolve(GetAllDoctor());
// data.then(
//     value => {
//         list = value;
//         console.log("list", list);
//     }
// )

const Modal = (props) => {

    const [user1, setUser1] = useState("");
    const [dateVar, setDateVar] = useState(new Date());
    const [user2, setUser2] = useState("");

    const bookcall = () => {
        console.log(dateVar);
        console.log(user2.value);
        BookAppointment(dateVar, '1', user2);
        props.setTrigger(false);
    };

    const handleChange2 = (user2) => {
        setUser2(user2);
    };

    const listmake = () => {
        var list;
        var data = Promise.resolve(GetAllDoctor());
        data.then(
        value => {
            list = value;
            // console.log("list", list);
        })
        data.then(() => {
            console.log(list);
            console.log(list[0]['id']);
        })
    };

    listmake();


  
    return(props.trigger) ? (
        <div className='hi'>
                    <div className='item1' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your doctor</h4>
                        <div className='dropdown' style={{maxWidth: "300px"}}>
                            <Select options={docopt} value={user2}
                            onChange={handleChange2}/>
                        </div>
                    </div>
                    <div className='item2' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your date</h4>
                        <DatePicker selected={dateVar} onChange={date => setDateVar(date)}/>
                        {/* <div className='input' style={{maxWidth: "300px"}}>
                            <input type='text' placeholder='DD/MM/YY'></input>
                        </div> */}
                    </div>
                    {/* <div className='item3' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your time</h4>
                        <div className='input' style={{maxWidth: "300px"}}>
                            <input type='text' placeholder='00:00'></input>
                        </div>
                    </div> */}
                    <button className='invite' onClick={bookcall} style={{position:"absolute", left:"50%", transform:"translate(-50%)", height:"30%", width:"10%",fontSize:"large"}}>Book</button>
        </div>
  ) : ""
}

export default Modal