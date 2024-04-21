import React, {useEffect, useState} from 'react';
import { GetAppByPatId } from '../../connections/Appointment';
import { retrieveUserId } from '../../connections/CookieJWT';
import AppComp from './AppComp';

const Applist = () => {

    const [list, setList] = useState([]);
    var patid = retrieveUserId();
    // console.log(patid);

    useEffect (() => {
        const data = Promise.resolve(GetAppByPatId(patid));
        // console.log("this is", data);
        data.then(
            value => {
                setList(value);
            }
        )
    }, [] 
    // [list]
    );

    // console.log(list);

    return (
        <div className= 'applist'>
            {list && list.map((elem) => {
                // console.log("this is elem", elem);
                return(
                    !elem.status ? <AppComp
                        time = {elem.date}
                        name = {elem.user2.first_name}
                    /> : ""
                );
            })}
        </div>
    )
}

export default Applist