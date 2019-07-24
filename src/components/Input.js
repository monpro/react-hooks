import React from "react";

export default function Input(props){
    const {valueChange, value} = props;
    return (
        <div>
            <input value={value} onChange={(event) => {valueChange(event.target.value)}}></input>
        </div>
    )
}
