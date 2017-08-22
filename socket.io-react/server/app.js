const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const port = process.env.PORT || 2087;
const http = require('http');

const cors = require('cors');

const server = http.createServer(app);
const io = require('socket.io')(server);

const channels = require('./sockets/server')(io);

const API = require('./services/api');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/services', API);

server.listen(port, () => {
    console.log('Server is listening at port:', port);
});