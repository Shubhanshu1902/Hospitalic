import React from 'react'
import { Navbar } from '../Dashboard/Navbar'
import { TopBar } from '../Dashboard/Topbar'
import HisContent from './HisContent'

const PatHis = () => {
  return (
    <div className='apphome'>
        <Navbar />
        <div className='appcontent'>
            <TopBar />
            <HisContent />
        </div>
    </div>
  )
}

export default PatHis