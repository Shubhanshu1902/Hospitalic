import React, {useEffect, useState} from 'react';
import { GetAppByLabId, GetAppByPatId } from '../../connections/Appointment';
import { retrieveUserId } from '../../connections/CookieJWT';
import AppComp from './AppComp';

const AppList = () => {

    const [list, setList] = useState([]);
    var patid = retrieveUserId();

    useEffect (() => {
        // TODO change 
        const data = Promise.resolve(GetAppByPatId(1));
        data.then(
            value => {
                setList(value);
            }
        )
    }, []);

    var i = 0;
    return (
        <div className= 'applist'>
            {list && list.map((elem) => {
                return(
                    !elem.status ? <AppComp
                        key = {i++}
                        pname = {elem.user1.first_name}
                        dname = {elem.user2.first_name}
                    /> : ""
                );
            })}
        </div>
    )
}

export default AppList