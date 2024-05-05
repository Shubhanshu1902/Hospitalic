import React, { useEffect, useState } from 'react'
import { retrieveUserId } from '../connections/CookieJWT'
import { GetAppByDoctorId } from '../connections/Appointment'
import { GetAppByPatId } from '../connections/Appointment'
import { useParams } from 'react-router-dom'
import HisComp from './HisComp'

const HisContent = () => {

    const [list, setList] = useState([]);
    var userId = retrieveUserId();
    var type = useParams().type;

    const getData = () => {
        let data = [];
        if (type === "patient") {
            data = Promise.resolve(GetAppByPatId(userId));
            data.then(value => {
                setList(value);
            });
        } else if (type === "doctor") {
            data = Promise.resolve(GetAppByDoctorId(userId));
            data.then(value => {
                setList(value);
            });
        }
    };

    useEffect(() => {
        getData();
    }, [])

    var i = 0;

  return (
    <div className='applist'>
        {list && list.map((elem) => {
            return(
                elem.doctor_done ?
                    <HisComp
                        key = {i++}
                        time = {elem.date}
                        doctorname = {elem.user2.first_name}
                        patientname = {elem.user1.first_name}
                        text = {elem.prescription}  
                        text2 = {elem.lab_prescription}  
                    />
                : " "
            );

        })}
    </div>
  )
}

export default HisContent