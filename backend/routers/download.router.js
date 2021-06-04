const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../models/db');
const { QueryTypes } = require('sequelize');

const { User, Gene, Interaction } = db;

router.get('/inhibitoryDrugs', (req, res) => {
    const file = './setup/inhibitoryDrugs.tsv';
    res.download(file);
})

router.get('/geneSeq', (req, res) => {
    const file = './setup/GeneSequences.csv';
    res.download(file);
})

router.get('/geneDrugMap', (req, res) => {
    const file = './setup/geneDrugMap.csv';
    res.download(file);
})

module.exports = router;

