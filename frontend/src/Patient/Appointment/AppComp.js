import React, { useState } from 'react'
import { faArrowAltCircleRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import Bookpop from './Bookpop'

const AppComp = (props) => {

  const [x, setButtonPopup] = useState(false);

  return (
    <div className='t1'>
      <div className='t2'>
        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{padding:"5px"}}/> Appointment at Dr. {props.name} on {moment(props.time).format("MMM Do YY")}
      </div>
      <button className='prescbutton' style={{fontSize:"large", height:"40px"}} onClick={() => setButtonPopup(true)}> View Prescription </button>
      <Bookpop trigger={x} setTrigger={setButtonPopup}>
        <p style={{fontSize:"large", padding:"3%"}}>{props.text}</p>
      </Bookpop>
    </div>
  )
}

export default AppComp