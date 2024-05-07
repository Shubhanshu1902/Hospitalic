import React, { useState } from "react";
import "./ToggleSwitch.scss"

export const ToggeleSwitch = props => {
    const change = () => {props.setX(x => 1 - x)}

    return (
        <div className="container">
            {props.label}{" "}
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    name={props.label}
                    id={props.label}
                    onChange={change}
                />
                <label className="label" htmlFor={props.label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};
