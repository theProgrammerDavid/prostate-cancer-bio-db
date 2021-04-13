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
    whiteText: {
        'text-decoration': 'none',
        color: 'white'
    }
})));

interface MailInterface {

    subject: string;
    children?: React.ReactNode;
}

function Contactus() {
    const classes = useStyles();
    const [name, setName] = useState<String>('');
    // const [email, setEmail] = useState<String>('');
    const [phone, setPhone] = useState<String>('');
    const [msg, setMsg] = useState<String>('');

    const submit = () => {

    }

    const Mailto = (props: MailInterface) => {
        let params = props.subject || msg ? '?' : '';
        if (props.subject) params += `subject=${encodeURIComponent(props.subject)}`;
        if (msg) params += `${props.subject ? '&' : ''}body=${msg}`;
        let email = 'me@davidvelho.tech'
        return <a href={`mailto:${email}${params}`} className={classes.whiteText}>{props.children}</a>;
    };

    return (
        <div className="Contactus">
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
            >
                <Mailto subject="Prostate Cancer DB - Contact form" >
                    Mail me!
                </Mailto>
            </Button>

        </div>
    );
}

export default Contactus;
