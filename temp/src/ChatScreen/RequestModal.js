import React, { useEffect, useState } from "react";
import { AddRadiologist, GetAllRadiologist } from "../connections/Appointment";
import Select from "react-select";
import { GetReportById } from "../connections/Report";

export const RequestModal = props => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [list, setList] = useState("");
    const [patId,setPatId] = useState(-1);

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const requestcall = () => {
        // console.log(selectedOption.id);
        // console.log(selectedOption.id)
        AddRadiologist(props.reportId, selectedOption.id,patId);
        props.setTrigger(false);
    };

    useEffect(() => {
        let data = [];
        async function fetchData() {
            data = await GetReportById(props.reportId);
            setPatId(data.user2.id)
        }

        fetchData()
    })

    useEffect(() => {
        let data = [];
        async function fetchData() {
            data = await GetAllRadiologist();
            setList(data);
        }

        fetchData();
    }, []);

    return (
        <div className="hi">
            <div
                className="item1"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <h4>Choose your doctor</h4>
                <div className="dropdown" style={{ width: "300px" }}>
                    <Select
                        options={list}
                        value={selectedOption}
                        getOptionLabel={opt => `${opt.first_name} ${opt.last_name}`}
                        getOptionValue={opt => opt.id}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button
                className="invite"
                onClick={requestcall}
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%)",
                    height: "40%",
                    fontSize: "large",
                }}
            >
                Send Invite
            </button>
        </div>
    );
};
