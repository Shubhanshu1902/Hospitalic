import React, { useEffect, useState } from "react";
import { AddRadiologist, GetAllRadiologist } from "../connections/Appointment";
import Select from "react-select";
import { GetReportById } from "../connections/Report";
import { SendEmailNotif } from "../connections/EmailNotif";
import { GetUser } from "../connections/User";

export const RequestModal = props => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [list, setList] = useState("");
    const [patId, setPatId] = useState(-1);
    const [patData, setPatData] = useState([]);
    const [report, setReport] = useState([]);

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
    };

    const requestcall = () => {
        // console.log(selectedOption.id);
        // console.log(selectedOption.id)
        AddRadiologist(props.reportId, selectedOption.id, patId);
        SendEmailNotif(
            report.user2.username,
            `${report.user1.first_name} ${report.user1.last_name}`,
            `${selectedOption.first_name} ${selectedOption.last_name}`,
            props.reportId
        );
        props.setTrigger(false);
    };

    useEffect(() => {
        let data = [];
        async function fetchData() {
            data = await GetReportById(props.reportId);
            setPatId(data.user2.id);
            setReport(data);
        }

        fetchData();
    });

    useEffect(() => {
        let data = [];
        async function fetchData() {
            data = await GetAllRadiologist();
            setList(data);
        }

        fetchData();
    }, []);

    // console.log(patData);

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
                        getOptionLabel={opt =>
                            `${opt.first_name} ${opt.last_name}`
                        }
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
