const router = require('express').Router();
const { checkDupUsernameEmail } = require('../middleware/verifySignup');
const bcrypt = require('bcrypt');
const db = require('../models/db');
const User = db.users;

router.post('/', checkDupUsernameEmail, async (req, res) => {
    try {
        console.log(req.body);

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        console.log(name, email, password)
        const resp = await User.create({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 8)
        })

        res.status(200).json({ msg: 'successfully signed up' });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ err: true, msg: 'invalid request' });

    }
});

module.exports = router;