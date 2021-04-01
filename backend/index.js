require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path');

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})