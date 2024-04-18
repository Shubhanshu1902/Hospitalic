import React from 'react'
import { Navbar } from './Navbar'
import '../css/Lab.scss'
import { TopBar } from './TopBar'

export const LabDashboard = () => {
  return (
    <div className='dashboard'>
        <TopBar />

        <Navbar />
    </div>
  )
}
