const router = require('express').Router();
const { generateToken } = require('../middleware/authJwt');
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
        console.log(resp)
        if (!resp) {
            res.status(500).json({ err: true, msg: 'user does not exist.' });
            return;
        }

        var isValid = await bcrypt.compare(pass, resp.password);
        if ( isValid) {
            res.json({ token: await generateToken(email), expiry: process.env.ACCESS_TOKEN_LIFE });
        } else { res.status(500).json({ err: true, msg: 'user does not exist' }); }

    }
    catch (e) {
        console.log(e);
        res.status(500).json({ err: true, msg: 'user does not exist' });
    }
});

module.exports = router;