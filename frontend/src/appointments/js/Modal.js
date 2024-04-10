import React from 'react'
import Select from 'react-select'
import { useState } from 'react'

const docopt = [
    {value: "shubhanshu", label:"Dr.Shubhanshu"},
    {value: "naitik", label:"Dr.Naitiksinh"},
    {value: "vatsal", label:"Dr.Vatsal"},
    {value: "vaibhav", label:"Dr.Vaibhav"},
    {value: "arin", label:"Dr.Arin"},
];

const Modal = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
  
    return (
        <div className='hi'>
                    <div className='item1' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your doctor</h4>
                        <div className='dropdown' style={{maxWidth: "300px"}}>
                            <Select options={docopt} value={selectedOption}
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='item2' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your date</h4>
                        <div className='input' style={{maxWidth: "300px"}}>
                            <input type='text' placeholder='DD/MM/YY'></input>
                        </div>
                    </div>
                    <div className='item3' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <h4>Choose your time</h4>
                        <div className='input' style={{maxWidth: "300px"}}>
                            <input type='text' placeholder='00:00'></input>
                        </div>
                    </div>
        </div>
  )
}

export default Modal