const db = require('../models/db');
const User = db.users;

exports.checkDupUsernameEmail = async (req, res, next) => {
    try {
        const ans = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (ans) {
            return res.status(500).json({ err: true, msg: 'username or email already exists' });
        }
        const ans1 = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (ans1) {
            res.status(404).json({ err: true, msg: 'username or email already exists' });
            return;
        }

        next();
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ err: true, msg: 'invalid request' });

    }
}