import React from 'react'
import { faArrowAltCircleRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

const AppComp = (props) => {
  return (
    <div className='t1'>
      <div className='t2'><FontAwesomeIcon icon={faArrowAltCircleRight}/> Appointment at Doctor {props.name} on {moment(props.time).format("MMM Do YY")}</div>
    </div>
  )
}

export default AppComp