const router = require('express').Router();
const { checkDupUsernameEmail } = require('../middleware/verifySignup');
const db = require('../models/db');
const bcrypt = require('bcrypt');
const User = db.users;

router.post('/', checkDupUsernameEmail, async (req, res) => {
    try {
        const username = req.body.username
        const email = req.body.email;
        const password = req.body.password;

        const resp = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        })
        res.status(200).json({ msg: 'successfully signed up' });
    }
    catch (e) {
        res.status(500).json({ err: true, msg: 'invalid request' });

    }
});

module.exports = router;