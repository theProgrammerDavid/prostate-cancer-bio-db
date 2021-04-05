import React from 'react'

import './Contactus.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
})));

function Contactus() {
    const classes = useStyles();
    return (
        <div className="Contactus">

            <h1><b>Contact Us</b></h1>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField required id="standard-basic" label="Name" /><br></br><br></br>
                <TextField required id="standard-basic" label="Email" /><br></br><br></br>
                <TextField required id="standard-basic" label="Phone Number" /><br></br><br></br>
                <TextField
                    id="outlined-multiline-static"
                    label="Your message"
                    multiline
                    required
                    rows={5}
                    variant="outlined"
                />
            </form>
            <br></br>
            <Button variant="contained" color="primary">
                Submit
            </Button>

        </div>
    );
}

export default Contactus;
