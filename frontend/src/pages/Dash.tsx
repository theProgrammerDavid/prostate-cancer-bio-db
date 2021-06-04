import React from 'react'
import {
    Grid, Paper

} from '@material-ui/core'
import { setUserCurrentPage } from 'features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Link } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const baseLink: string = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';

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
                {/* <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('bioCalc'))}
                    >
                        Bioactivity Calculator
                    </Paper>
                </Grid> */}
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('submitProt'))}
                    >
                        Submit Gene Seq
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        onClick={(e) => dispatch(setUserCurrentPage('search'))}
                    >
                        Drug Search
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
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.root}>
                            <Link target="_blank" href={`${baseLink}/download/inhibitoryDrugs`} >
                                Download Inhibitory Drugs
                         </Link>
                        </Typography>
                    </Paper>

                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.root}>
                            <Link target="_blank" href={`${baseLink}/download/geneSeq`} >
                                Download Gene Sequences
                            </Link>
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.root}>
                            <Link target="_blank" href={`${baseLink}/download/geneDrugMap`} >
                                Download Gene Drug Mapping
                            </Link>
                        </Typography>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
}

export default Dash
