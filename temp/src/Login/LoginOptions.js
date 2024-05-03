import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LoginOptions = (props) => {
  return (
    <div>
    <div className='LoginOptions'  onClick={props.onClick}>
      {props.type}
      <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
    </div>
    </div>
  )
}
