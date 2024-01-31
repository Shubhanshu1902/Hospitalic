import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../css/LoginScreen.scss'

export const LoginOptions = (props) => {
  return (
    <div>
    <div className='LoginOptions'  onClick={props.onClick}>
      {props.type}
      <FontAwesomeIcon icon={icon({name: 'arrow-right-long', family: 'classic',style: 'solid'})} />
    </div>
    </div>
  )
}
