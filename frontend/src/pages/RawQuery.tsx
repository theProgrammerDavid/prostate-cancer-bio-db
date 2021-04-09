import React from 'react'
import {
    Typography, TextField, Grid, Paper,
    Accordion, AccordionSummary, TextareaAutosize,
    AccordionDetails
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';


import {
    ExpandMore as ExpandMoreIcon
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
function RawQuery() {
    const classes = useStyles();
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

    return (
        <div className={classes.root}>
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
            </Grid>

            <Grid container spacing={3}>
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

                <Grid item xs={4}>
                    <Typography variant="h2">RAW Query</Typography>

                </Grid>

                <Grid item xs={8}>
                    <TextareaAutosize
                        rowsMin={10}
                        className={classes.query}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue='SELECT organism, type  FROM `TARGET_SYNONYMs` as syn  JOIN `TARGETs` as T WHERE T.PID="CHEMBL50
                                    64" AND syn.PID="CHEMBL5064" LIMIT 10;'
                    />
                </Grid>
            </Grid>


        </div>

        // </div>
    )
}

export default RawQuery
