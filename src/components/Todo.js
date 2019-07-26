import React, {useState} from "react";
import Input from "./Input";
import List from "./List";
import Button  from "./Button";
export default function Todo(){
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    const [editFlag, setEditFlag] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    function addToList(editFlag){
        if(!editFlag) {
            if (value === "")
                return;
            list.push(value);
            setList(list);
            setValue("");
        }
        else{
            const newList = list.map((_,index) => {
                if(selectedList === index)
                    return value;
                else
                    return _;
            });
            setList(newList);
            setValue("");
            setEditFlag(false);
        }
    }

    function deleteList(index) {
        const updatedList = list.filter((_, i) => i !== index);
        console.log(updatedList)
        setList(updatedList);
    }

    function editList(index) {
        console.log(index);
        const listValue = list[index];
        setValue(listValue);
        setEditFlag(true);
        setSelectedList(index);
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Input value={value} valueChange={(value)=>setValue(value) }/>
            <Button editFlag={editFlag}
                    onClick={() => addToList(editFlag)}/>
            </div>
            <List list={list}
                  deleteList={(index) => deleteList(index)}
                  editList = {(index) => editList(index)}/>
        </div>
    )
}
