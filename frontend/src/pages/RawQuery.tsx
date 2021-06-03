import React from 'react'
import Swal from 'sweetalert2';
import {
    Typography, TextField, Grid, Paper, Button,
    Accordion, AccordionSummary, TextareaAutosize,
    AccordionDetails, Divider, Tooltip, ListItemIcon
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import axios from 'util/api';
import {
    ExpandMore as ExpandMoreIcon,
    HelpOutline as HelpOutlineIcon
} from '@material-ui/icons'

import Table from 'components/Table';
const useStyles = makeStyles((theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
            height: '50ch',

        },
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
const makeData = (a: String, b: String, c: String = '') => {
    return { column: a, datatype: b, description: c }
}
const targetComps = [
    makeData('PID', 'STRING', 'Protein ID, Primary Key'),
    makeData('accession', 'STRING', ''),
    makeData('description', 'STRING', 'info about protein target'),
    makeData('type', 'STRING', ''),
    makeData('relationship', 'STRING', '')
]

const crossReferences = [
    makeData('PID', 'STRING', ''),
    makeData('xref_id', 'STRING'),
    makeData('xref_name', 'STRING'),
    makeData('xref_src', 'STRING')
]

const targetXref = [
    makeData('PID', 'STRING'),
    makeData('xrefid', 'STRING'),
    makeData('name', 'STRING'),
    makeData('src_db', 'STRING')
]

const targets = [
    makeData('PID', 'STRING'),
    makeData('organism', 'STRING'),
    makeData('pref_name', 'STRING'),
    makeData('score', 'STRING'),
    makeData('target_type', 'STRING'),
    makeData('tax_id', 'STRING'),
    makeData('species_group_flag', 'STRING')
]

const synonyms = [
    makeData('PID', 'STRING'),
    makeData('name', 'STRING'),
    makeData('type', 'STRING')
]



function RawQuery() {
    const [query, setQuery] = React.useState<string>('');
    const [ans, setAns] = React.useState<string>('');
    const classes = useStyles();
    const submitQuery = async () => {
        try {
            const payload = {
                query: query
            }

            const result = await axios.post('/user/raw', payload);
            console.log(result.status)
            if (result.status == 200) {
                console.log(result.data);
                setAns(JSON.stringify(result.data));
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
        <div className={classes.root}>
            <Typography variant="h2">RAW SQL Query</Typography>
            <Tooltip placement="right" title="SQL Queries are READ only. Queries that contain MODIFY / UPDATE / DELETE / DROP / any query to modify the state of the table are not allowed.">
                <ListItemIcon> <HelpOutlineIcon /></ListItemIcon>
            </Tooltip>
            <Divider />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Accordion TransitionProps={{ unmountOnExit: true }} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>TARGET_COMPONENTs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table data={targetComps} />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={6}>
                    <Accordion TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>CROSS_REFERENCEs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table data={crossReferences} />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={6}>
                    <Accordion TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>TARGET_COMPONENT_XREFs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table data={targetXref} />

                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={6}>
                    <Accordion TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>TARGETs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table data={targets} />
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item xs={6}>
                    <Accordion TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>TARGET_SYNONYMs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table data={synonyms} />
                        </AccordionDetails>
                    </Accordion>

                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h4">Query editor</Typography>

                    <TextareaAutosize
                        rowsMin={10}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className={classes.query}
                        aria-label="maximum height"
                        placeholder='SELECT organism, type  FROM `TARGET_SYNONYMs` as syn  JOIN `TARGETs` as T WHERE T.PID="CHEMBL5064" AND syn.PID="CHEMBL5064" LIMIT 10;'
                    />
                    <br />
                    <Button variant="contained" color="primary"
                        onClick={() => { submitQuery() }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>

            <Typography variant="h4">
                Results
            </Typography>
           
                <TextareaAutosize
                    rowsMin={10}
                    value={ans}
                    disabled={true}
                    className={classes.query}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                />
            
        </div>

        // </div>
    )
}

export default RawQuery
