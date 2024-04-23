import React from 'react'
import { useState, useEffect } from 'react';
import { retrieveUserId } from '../../connections/CookieJWT';
import { GetAppByPatId } from '../../connections/Appointment';
import HisComp from './HisComp';

const HisContent = () => {

    const [list, setList] = useState([]);
    var patid = retrieveUserId();

    useEffect (() => {
        const data = Promise.resolve(GetAppByPatId(patid));
        data.then(
            value => {
                setList(value);
            }
        )
    }, [] 
    );

    return (
        <div className='applist2'>
            {list && list.map((elem) => {
                return(
                    elem.status ? <HisComp
                        time = {elem.date}
                        name = {elem.user2.fname}
                    /> : ""
                );
            })}
        </div>
    )
}

export default HisContent