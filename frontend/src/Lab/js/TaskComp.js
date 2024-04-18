import React from 'react'
import { faArrowAltCircleRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

const TaskComp = (props) => {
  return (
    <div className='t1'>
      <div className='t2'><FontAwesomeIcon icon={faArrowAltCircleRight}/> Upload report for patient {props.pname} appointed by {props.dname}</div>
    </div>
  )
}

export default TaskComp