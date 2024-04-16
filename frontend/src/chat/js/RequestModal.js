import React, { useEffect } from 'react'
import Select from 'react-select'
import { useState } from 'react'
import { AddRadiologist, GetAllRadiologist } from '../../connections/Appointment';

// const docopt = [
//     {value: "shubhanshu", label:"Dr.Shubhanshu"},
//     {value: "naitik", label:"Dr.Naitiksinh"},
//     {value: "vatsal", label:"Dr.Vatsal"},
//     {value: "vaibhav", label:"Dr.Vaibhav"},
//     {value: "arin", label:"Dr.Arin"},
// ];

const RequestModal = (props) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [list, setList] = useState("");

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const requestcall = () => {
        console.log(selectedOption.id);

        AddRadiologist('1', selectedOption.id);

        props.setTrigger(false);
    };

    useEffect(() => {
        const data = Promise.resolve(GetAllRadiologist());
        data.then(
            value => {
                setList(value);
            }
        )
    }, []);
  
    return (
        <div className='hi'>
                    <div className='item1' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your doctor</h4>
                        <div className='dropdown' style={{width: "300px"}}>
                            <Select 
                                options={list} 
                                value={selectedOption}
                                getOptionLabel={(opt) => opt.first_name}
                                getOptionValue={(opt) => opt.id}
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <button className='invite' onClick={requestcall} style={{position:"absolute", left:"50%", transform:"translate(-50%)", height:"40%", fontSize:"large"}}>Send Invite</button>
        </div>
  )
}

export default RequestModal