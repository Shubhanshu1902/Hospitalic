import React, { useEffect, useState } from 'react'
import { AddLabPrescription, AddPrescription, AssignLab, GetAllLab, updateDoctorStatus } from '../connections/Appointment';
import Select from 'react-select'
export const TaskModal = (props) => {
    const [lab, setLab] = useState("");
    const [list, setList] = useState([]);
    const [patpresc, setPresc] = useState("")
    const [labpresc, setLabPresc] = useState("")
    var app = props.app_id;

    const assigncall = () => {
        // console.log(lab.id);
        AssignLab(lab.id, app);
        updateDoctorStatus(app);
        AddPrescription(app, patpresc);
        AddLabPrescription(app, labpresc);


        props.setTrigger(false);
    }

    const handleChange = (lab) => {
        setLab(lab);
    }

    useEffect (() => {
        const data = Promise.resolve(GetAllLab());
        console.log(data)
        data.then(
        value => {
            setList(value);
        })
    }, []);



    return(props.trigger) ? (
        <div className='hi'>
            <div className='wanka' style={{display:'flex', flexDirection:'column', gap:'50px'}}>
            <div className='item1' style={{display:'flex', alignItems:'center', justifyContent:'space-around', paddingTop:'10px'}}>
                <span>Assign Lab to patient</span>
                    <div className='dropdown' style={{maxWidth: "300px"}}>
                        <Select 
                            options={list}
                            value={lab}
                            getOptionLabel={(opt) => opt.first_name}
                            getOptionValue={(opt) => opt.id}
                            onChange={handleChange}/>
                    </div>
            </div>
            <div className='prescbox' style={{display:'flex',justifyContent:'space-around'}}>
                <span>Add prescription for patient</span>
                <textarea 
                    className='textbox'
                    value={patpresc} 
                    onChange={event => {setPresc(event.target.value)}}
                    placeholder="Prescribe"
                />
            </div>
            <div className='prescbox' style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>
                <span>Add prescription for lab</span>
                <textarea
                    className='textbox' 
                    value={labpresc} 
                    onChange={event => {setLabPresc(event.target.value)}}
                    placeholder='Prescribe' 
                />
            </div>
            </div>
            <button className='invite' onClick={assigncall} style={{position:"absolute",bottom:"-10%", left:"50%", transform:"translate(-50%)", height:"10%", width:"10%",fontSize:"large"}}>Assign</button>

        </div>
  ) : ""
}
