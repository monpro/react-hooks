import React, {useState} from "react";
import Input from "./Input";
import List from "./List";
import Button  from "./Button";
export default function Todo(){
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    function addToList(){
        list.push(value);
        setList(list);
        setValue("");
    }
    return (
        <div>
            <Input value={value} valueChange={(value)=>setValue(value) }/>
            <Button onClick={() => addToList()}/>
            <List list={list}/>
            {/* <Button/> */}
            {/* <List/> */}
        </div>
    )
}
