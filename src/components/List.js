import React, {useState} from "react";

export default function List(props){
    const {list} = props;
    return (
        <div>
            {list && list.map((element,index) => <p key={index}>{element}</p>)}
        </div>
    )
}
