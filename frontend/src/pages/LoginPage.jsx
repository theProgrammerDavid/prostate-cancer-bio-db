import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import Axios from 'util/api';

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

function LoginPage() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const login = async () => {
        const payload = {
            email: email,
            password: pass
        }
        const response = await Axios.post('/login', payload);
        console.log(response);
    }
    return (
        <div className={classes.root} align="center">
            <Typography variant="h2">Login</Typography>

            <TextField required
                id="standard-basic1"
                label="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
            />
            <br></br><br></br>
            <TextField
                required
                type="password"
                id="standard-basic2"
                label="password"
                onChange={e => setPass(e.target.value)}

            />
            <br></br><br></br>

            <br></br>
            <Button
                variant="contained"
                color="primary"
                onClick={e => login()}
            >
                Login
            </Button>
        </div>
    )
}

export default LoginPage
