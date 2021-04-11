import React from 'react'
import {
    Typography, Grid, Paper

} from '@material-ui/core'
import { setUserCurrentPage } from 'features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


function BioCalc() {
    return (
        <div>
            <Typography variant="h2">
                Submit Protein
            </Typography>

            <Typography variant="subtitle1">
                Work in progress
            </Typography>
        </div>
    )
}

export default BioCalc
