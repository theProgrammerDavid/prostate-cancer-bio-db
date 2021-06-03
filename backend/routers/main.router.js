const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../models/db');
const { QueryTypes } = require('sequelize');

const { User, Gene, Interaction } = db;

router.post('/drugSearch', async (req, res) => {
    try {
        const { search } = req.body;
        console.log(search);
        let ans = [];

        for (let i = 0; i < search.length; i++) {
            let s = search[i];
            let x = await Interaction.findAll({ where: { gene: s } });
            ans.push(...x);
        }
        res.json({ ans: ans });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ err: true, msg: 'invalid request' });

    }
});

router.post('/raw', async (req, res) => {
    try {
        const { query } = req.body;
        console.log(`query: ${query}`);
        if(query.length ==0){
            return res.status(500).json({ err: true, msg: 'query too short' });

        }
        const result = await db.sequelize.query(query, { type: QueryTypes.SELECT });
        res.json(result);
    } catch (e) {
        console.log(e)
        res.status(500).json({ err: true, msg: 'invalid request' });
    }
})

module.exports = router;