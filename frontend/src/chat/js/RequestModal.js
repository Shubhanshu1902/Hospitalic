import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import { AddRadiologist } from '../../connections/Appointment';

const docopt = [
    {value: "shubhanshu", label:"Dr.Shubhanshu"},
    {value: "naitik", label:"Dr.Naitiksinh"},
    {value: "vatsal", label:"Dr.Vatsal"},
    {value: "vaibhav", label:"Dr.Vaibhav"},
    {value: "arin", label:"Dr.Arin"},
];

const RequestModal = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const requestcall = () => {
        console.log(selectedOption.value);

        AddRadiologist('1', '3');
    };
  
    return (
        <div className='hi'>
                    <div className='item1' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your doctor</h4>
                        <div className='dropdown' style={{width: "300px"}}>
                            <Select options={docopt} value={selectedOption}
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <button className='invite' onClick={requestcall} style={{position:"absolute", left:"50%", transform:"translate(-50%)", height:"40%", fontSize:"large"}}>Send Invite</button>
        </div>
  )
}

export default RequestModal