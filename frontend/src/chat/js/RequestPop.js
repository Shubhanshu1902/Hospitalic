import React from 'react'

const RequestPop = (props) => {
  return(props.trigger) ? (
    <div className='popup'>
        <div className='pop-in'>
            <button className='close' onClick={() => props.setTrigger(false)}>X</button>
            {props.children}
        </div>
    </div>
  ) : ""
}

export default RequestPop