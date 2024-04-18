import React, {useEffect, useState} from 'react';
import { GetAppByLabId } from '../../connections/Appointment';
import { retrieveUserId } from '../../connections/CookieJWT';
import TaskComp from './TaskComp';

const TaskList = () => {

    const [list, setList] = useState([]);
    var patid = retrieveUserId();
    console.log(patid);

    useEffect (() => {
        const data = Promise.resolve(GetAppByLabId(patid));
        console.log("this is", data);
        console.log(data)
        data.then(
            value => {
                setList(value);
            }
        )
    }, []);

    console.log(list);

    return (
        <div className= 'applist'>
            {list && list.map((elem) => {
                console.log("this is elem", elem);
                return(
                    <TaskComp
                        pname = {elem.user1.first_name}
                        dname = {elem.user2.first_name}
                    />
                );
            })}
        </div>
    )
}

export default TaskList