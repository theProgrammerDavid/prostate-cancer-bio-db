import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import Axios from 'util/api';
import Swal from 'sweetalert2'


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


function SignUp() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const check = () => {
        return (name.length < 0 || pass.length < 0 || email.length < 0);
    }

    const signup = async () => {
        const payload = {
            password: pass,
            name: name,
            email: email
        }

        try {
            const resp = await Axios.post('/signup', payload);
                Swal.fire(
                    'Success!',
                    'User created successfully!',
                    'success'
                )
            // }
        }
        catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${e}`,

            })
            console.log(e)
        }
    }

    return (
        <div className={classes.root} align="center">
            <Typography variant="h2">Sign Up</Typography>

            <TextField required
                id="standard-basic1"
                label="name"
                error={name.length > 0 ? false : true}
                onChange={e => setName(e.target.value)}
            />
            <br></br><br></br>

            <TextField required
                id="standard-basic1"
                label="email"
                error={email.length > 0 ? false : true}
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
                onClick={e => { if (!check()) signup() }}
            >
                Sign Up
            </Button>
        </div>
    )
}

export default SignUp
