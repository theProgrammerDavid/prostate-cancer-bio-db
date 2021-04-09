const router = require('express').Router();
const { generateToken, authenticateToken } = require('../middleware/authJwt');
const bcrypt = require('bcrypt');

const db = require('../models/db');
const User = db.users;

router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;

        console.log(email)

        const resp = await User.findOne({
            where: {
                email: email,
            }
        })

        if (!resp) {
            res.status(500).json({ err: true, msg: 'user does not exist.' });
            return;
        }
        
        console.log(resp.dataValues)
        var isValid = await bcrypt.compare(pass, resp.password);

        if (isValid) {
            res.json({ token: await generateToken(email), expiry: process.env.ACCESS_TOKEN_LIFE });
        } else {
            res.status(500).json({ err: true, msg: 'user does not exist' });
        }

    }
    catch (e) {
        console.log(e);
        res.status(500).json({ err: true, msg: 'user does not exist' });
    }
});

router.get('/ping', authenticateToken, async (req, res) => {
    res.send('poing');
});

module.exports = router;