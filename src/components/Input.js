import React from "react";
import { makeStyles } from '@material-ui/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
        margin: "20px"
    },
});

export default function InputField(props){
    const classes = useStyles();
    const {valueChange, value} = props;
    return (
        <div>
            <Input className={classes.root} value={value} onChange={(event) => {valueChange(event.target.value)}}/>
        </div>
    )
}
