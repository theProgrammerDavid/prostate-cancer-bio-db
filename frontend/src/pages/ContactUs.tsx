import React, { useState } from 'react'

import './Contactus.css';
import { Button, TextField, Typography } from '@material-ui/core'
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
    const [name, setName] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [phone, setPhone] = useState<String>('');
    const [msg, setMsg] = useState<String>('');

    const submit = () => {

    }

    return (
        <div className="Contactus">

            {/* <h1><b>Contact Us</b></h1> */}
            <Typography variant="h2">Contact Us</Typography>
            <div className={classes.root} >

                <TextField required
                    id="standard-basic"
                    label="Name"
                    onChange={e => setName(e.target.value)}
                />
                <br></br><br></br>
                <TextField
                    required
                    id="standard-basic"
                    onChange={e => setEmail(e.target.value)}

                    label="Email"
                />
                <br></br><br></br>
                <TextField
                    required
                    id="standard-basic"
                    label="Phone Number"
                    onChange={e => setPhone(e.target.value)}
                />
                <br></br><br></br>


                <TextField
                    id="outlined-multiline-static"
                    label="Your message"
                    multiline
                    required
                    rows={5}
                    variant="outlined"
                    onChange={e => setMsg(e.target.value)}

                />
            </div>
            <br></br>
            <Button
                variant="contained"
                color="primary"
                onClick={e => submit()}
            >
                Submit
            </Button>

        </div>
    );
}

export default Contactus;
