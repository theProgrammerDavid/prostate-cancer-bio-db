import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import Axios, { setHeader } from 'util/api';
import { setUserCurrentPage, loginUser } from 'features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import ReCAPTCHA from "react-google-recaptcha";


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
    const dispatch = useDispatch();
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const login = async () => {
        const payload = {
            email: email,
            password: pass
        }
        try {
            const response = await Axios.post('/login', payload);
            console.log(response);

            if (response.status === 200) {
                dispatch(loginUser(email));
                dispatch(setUserCurrentPage('dash'));
                localStorage.setItem("accessToken", response.data.token);
                setHeader(response.data.token);
            }
        }
        catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${e}`,

            })
        }
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
            <ReCAPTCHA
                sitekey="6LePfqgaAAAAALi9_nnz6kut7mJGLvC4inV2KoEC"
                onChange={e=>{
                    
                }}
            />,
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
