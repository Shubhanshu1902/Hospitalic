import React, { useEffect } from 'react'
import { useState } from 'react';
import { retrieveUserId } from '../../connections/CookieJWT';
import { AssignLab, GetAllLab } from '../../connections/Appointment';
import Select from 'react-select'

const TaskModal = (props) => {

    const [lab, setLab] = useState("");
    const [list, setList] = useState([]);
    var app = props.app_id;

    const assigncall = () => {
        // console.log(lab.id);
        AssignLab(lab.id, app);
        props.setTrigger(false);
    }

    const handleChange = (lab) => {
        setLab(lab);
    }

    useEffect (() => {
        const data = Promise.resolve(GetAllLab());
        data.then(
        value => {
            setList(value);
        })
    }, []);

    // console.log(list);


    return(props.trigger) ? (
        <div className='hi'>

            <div className='item1' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                <h4>Assign Lab to patient</h4>
                    <div className='dropdown' style={{maxWidth: "300px"}}>
                        <Select 
                            options={list}
                            value={lab}
                            getOptionLabel={(opt) => opt.first_name}
                            getOptionValue={(opt) => opt.id}
                            onChange={handleChange}/>
                    </div>
            </div>
            <button className='invite' onClick={assigncall} style={{position:"absolute", left:"50%", transform:"translate(-50%)", height:"40%", width:"10%",fontSize:"large"}}>Assign</button>

        </div>
  ) : ""
}

export default TaskModal