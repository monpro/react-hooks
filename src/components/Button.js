import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function SubmitButton(props){
    const classes = useStyles();
    const {onClick} = props;
    return(
        <Button className={classes.button} variant="contained" color="primary" onClick={() => onClick()}>
            submit
        </Button>
    )
}