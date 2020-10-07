import React from 'react';
import './Toggle.css';

const Toggle = props => (
    <div className={"menu_toggle" + (props.state ? " open" : "")}>
        <button className="toggle_button" onClick={props.click}> 
            <div className="toggle_button_line"></div>
            <div className="toggle_button_line"></div>
            <div className="toggle_button_line"></div>
        </button>
    </div>
);

export default Toggle;