const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 8080;

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})