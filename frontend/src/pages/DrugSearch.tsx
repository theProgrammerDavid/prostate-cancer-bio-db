import React from 'react'
import axios from 'util/api';
import Swal from 'sweetalert2';
import {
    Typography, Grid, Paper

} from '@material-ui/core'

import { setUserCurrentPage } from 'features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextareaAutosize } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
            height: '50ch',

        },
    }, table: {
        minWidth: 350,
    },
    whiteText: {
        'text-decoration': 'none',
        color: 'white'
    },
    query: {
        width: '50ch'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
})));

const makeData = (a: String, b: String) => {
    return { drug: a, gene: b }
}

interface Row {
    drug: String;
    gene: String;
}

function BasicTable(rows: Row[]) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Drug</TableCell>
                        <TableCell align="center">Gene</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.drug}
                            </TableCell>
                            <TableCell align="center">{row.gene}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function BioCalc() {
    const [search, setSearch] = React.useState<string>();
    const [data, setData] = React.useState<Row[]>([]);
    const classes = useStyles();

    const submitFn = async (arr: string[]) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].trim();
        }
        console.log(arr)
        const payload = {
            search: arr
        };

        try {
            const response = await axios.post('/user/drugSearch', payload);

            if (response.status === 200) {
                let x = [];
                for (let i = 0; i < response.data.ans.length; i++) {
                    x.push({ drug: response.data.ans[i].drug, gene: response.data.ans[i].gene })
                    // console.log(response.data.ans)
                }
                setData(x);
                // console.log(response.data.ans.length);
                ///console.log(x)
            }
        }
        catch (e) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${e}`,
            });
        }
    }

    return (
        <div>
            <Typography variant="h2">
                Drug Search
            </Typography>

            <br /><br />
            <Typography variant="subtitle1">
                Enter protein names separated by a ,
            </Typography>

            <TextareaAutosize
                rowsMin={10}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={classes.query}
                aria-label="maximum height"
                placeholder="EGFR, TP53,..."
            />
            <br />
            <br />
            <Button variant="contained" color="primary"
                onClick={() => {
                    let ans = search?.split(',');
                    if (ans != undefined)
                        submitFn(ans);
                }}
            >
                Search
                </Button>
            <br />
            <Typography variant="h4">
                {`${data.length} Results`}
            </Typography>

            {
                BasicTable(data)
            }
        </div>
    )
}

export default BioCalc
