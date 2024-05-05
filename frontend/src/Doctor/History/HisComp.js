import React from 'react'
import { faCheckCircle } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

const HisComp = (props) => {
  return (
    <div className='t1'>
      <div className='t2'><FontAwesomeIcon icon={faCheckCircle}/> Appointment at Doctor {props.name} on {moment(props.time).format("MMM Do YY")}</div>
    </div>
  )
}

export default HisComp