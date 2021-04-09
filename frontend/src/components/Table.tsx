import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
        paddingLeft: 2,
    },
    title: {
        flex: '1 1 100%',
    },
});

interface Row {
    column: String;
    datatype: String;
    description: String;
}
interface T {
    data: Array<Row>;
}

export default function BasicTable(props: T) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Column</TableCell>
                        <TableCell align="right">Data Type</TableCell>
                        <TableCell align="right">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row: Row, id: number) => (
                        <TableRow key={id}>
                            <TableCell component="th" scope="row">
                                {row.column}
                            </TableCell>
                            <TableCell align="right">{row.datatype}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
