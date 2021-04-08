import React from 'react'
import {
    Typography, TextField, Grid
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import {

} from '@material-ui/icons'


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

function RawQuery() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
               
            >

                <Grid item xs={3}>
                    <>

                        <Typography variant="h2">RAW Query</Typography>
                        <TextField
                            label="SQL Query"
                            variant="outlined"
                            placeholder="SELECT * FROM users WHERE id=8"
                            multiline
                            rows={10}
                        />
                    </>
                </Grid>

            </Grid>
        </div>

        // </div>
    )
}

export default RawQuery
