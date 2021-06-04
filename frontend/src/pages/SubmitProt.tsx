import React from 'react'
import {
    Typography, Grid, Paper,
    TextareaAutosize, TextField

} from '@material-ui/core'
import { setUserCurrentPage } from 'features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


function BioCalc() {
    return (
        <div>
            <Typography variant="h2">
                Submit Gene Sequence
            </Typography>
            <br /><br />
            <Typography variant="h5">Submission Details</Typography>
            <br /><br />

            <TextField id="outlined-basic" label="Certification Number" variant="outlined" /><br /> <br />
            <TextField id="outlined-basic" label="gene id" variant="outlined" /><br /> <br />
            <TextField id="outlined-basic" label="gene name" variant="outlined" /><br /> <br />
            <br /> 
            <TextareaAutosize
                rowsMin={10}

                aria-label="maximum height"
                placeholder="fasta sequence"
            />
            <br />
            <Button 
            color="primary"
            variant="contained"
            >
                Submit
            </Button>
        </div>
    )
}

export default BioCalc
