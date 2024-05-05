import React from 'react'
import { Topbar } from '../dashboard/Topbar'
import { Navbar } from '../dashboard/Navbar'
import "../css/Main.scss"
import { getRole, verify } from "../connections/User";
import { useNavigate, useParams } from "react-router-dom";
import HisContent from './HisContent';
import { Page404 } from '../Page404/Page404';

const PatHis = () => {

    const type = useParams().type;
    const navigate = useNavigate();
    if (!verify(type)) navigate("404");

  return verify(type) ? (
    <div className='dashboard'>
        <Navbar/>
        <div className='AppContent'>
            <Topbar/>
            <HisContent/>
        </div>
    </div>
  )
  : (<Page404/>)
}

export default PatHis