const router = require('express').Router();
const { generateToken } = require('../middleware/authJwt');

router.post('/', async (req, res) => {
    try {
        const username = req.body.username;
        console.log(username);

        console.log();
        res.json({ token: await generateToken(username), expiry: process.env.ACCESS_TOKEN_LIFE });
    }
    catch (e) {
        res.status(500).json({ err: true, msg: 'invalid request' });
    }
});

module.exports = router;