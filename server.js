const express = require('express');
const path = require('path')

const app = express();

app.get('/', (req, res) => {
    // console.log('serve a file')
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', (req, res) => {

    console.log(`serving file... ${req?.originalUrl}`)
    if(req.originalUrl){
        res.sendFile(path.join(__dirname + req.originalUrl))
    }
})

const server = require('http').createServer(app);

server.listen(9000);
console.log('Server is up...')