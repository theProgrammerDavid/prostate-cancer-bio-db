import React from 'react'
import {
    Typography, Grid, Paper

} from '@material-ui/core'
import { setUserCurrentPage } from 'features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Button} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            cursor: 'pointer'
        },
    }),
);

function Dash() {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div>
            <Typography variant="h3" component="span">
                Dashboard
            </Typography>
            <br />
            <br />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('bioCalc'))}
                    >
                        Bioactivity Calculator
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('submitProt'))}
                    >
                        Submit Protein
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('search'))}
                    >
                        Protein Search
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('rawQuery'))}
                    >
                        RAW SQL Query
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('statistics'))}
                    >
                        Biological Statistics
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dash
