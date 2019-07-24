import React, {useState} from 'react';

export default function Button(props){
    const {onClick} = props;

    return(
        
        <button onClick={() => onClick()}>
            submit
        </button>
    )
}