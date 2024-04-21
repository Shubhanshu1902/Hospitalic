import React, {useEffect, useState} from 'react';
import { GetAppByLabId, GetAppByPatId } from '../../connections/Appointment';
import { retrieveUserId } from '../../connections/CookieJWT';
import TaskComp from './TaskComp';

const TaskList = () => {

    const [list, setList] = useState([]);
    var patid = retrieveUserId();

    useEffect (() => {
        // TODO change 
        const data = Promise.resolve(GetAppByLabId(patid));
        data.then(
            value => {
                setList(value);
            }
        )
    }, [] 
    // [list]
    );

    var i = 0;
    return (
        <div className= 'applist'>
            {list && list.map((elem) => {
                return(
                    !elem.status ? <TaskComp
                        key = {i++}
                        id = {elem.id}
                        pname = {elem.user1.first_name}
                        dname = {elem.user2.first_name}
                        pid = {elem.user1.id}
                        did = {elem.user2.id}
                    /> : ""
                );
            })}
        </div>
    )
}

export default TaskList