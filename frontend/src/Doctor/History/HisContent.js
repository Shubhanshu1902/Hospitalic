import { GetAppByPatId, GetAppByDoctorId} from '../../connections/Appointment';
import { retrieveUserId } from '../../connections/CookieJWT';
import HisComp from './HisComp';
import { useState, useEffect } from 'react';

const HisContent = () => {

    const [list, setList] = useState([]);
    var patid = retrieveUserId();

    useEffect (() => {
        const data = Promise.resolve(GetAppByDoctorId(patid));
        data.then(
            value => {
                setList(value);
            }
        )
    }, [] 
    );
    console.log(patid, list);

    return (
        <div className='applist2'>
            {list && list.map((elem) => {
                return(
                    elem.doctor_done ? <HisComp
                        time = {elem.date}
                        name = {elem.user2.first_name}
                    /> : ""
                );
            })}
        </div>
    )
}

export default HisContent