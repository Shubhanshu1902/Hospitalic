import React from 'react'

const TaskModal = (props) => {
    return(props.trigger) ? (
        <div className='hi'>Hi this is {props.patient}</div>
  ) : ""
}

export default TaskModal