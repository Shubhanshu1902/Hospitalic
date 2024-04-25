import React from 'react'
import { Navbar } from '../Dashboard/Navbar'
import { TopBar } from '../Dashboard/TopBar'
import HisContent from './HisContent'
import "../Doctor.scss"

const DocHis = () => {
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

export default DocHis