import React, { useState } from 'react'
import { InputAdornment, IconButton, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import type { PasswordFieldProps } from '../types';

function Constant(props: PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <>
            <TextField
                id="filled-password"
                label={props.label}
                type={showPassword ? "text" : "password"}
                style={{ margin: 8 }}
                value={props.pass}
                onChange={e => props.onChangeHandler(e.target.value)}
                placeholder={props.placeholder}
                fullWidth={props.fullWidth ? true : false}
                margin="normal"
                InputProps={{ // <-- This is where the toggle button is added.
                    startAdornment: (props.startAdornment ? props.startAdornment : <></>),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                required
            />&nbsp;
        </>

    );
}

export default Constant;