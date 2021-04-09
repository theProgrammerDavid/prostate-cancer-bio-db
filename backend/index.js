require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const signupRouter = require('./routers/signup.router');
const loginRouter = require('./routers/login.router');
const setupRouter = require('./setup/setup.router');
const db = require('./models/db');

const port = process.env.PORT || 3000;

app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/setup', setupRouter);

db.sequelize.sync({}).then(() => {
    console.log("conncted to db.");
});
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})