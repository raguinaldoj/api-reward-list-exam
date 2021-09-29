const express = require('express');
const app = express();
const cors = require('cors');
var fs = require('fs')
const mongoose = require('mongoose');
const rewardListRoute = require('./routes/rewardListRoute');
const http = require('http')
require('dotenv/config');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());

app.get('/', () => {
    console.log('api successfully running!');
});

app.use('/rewardList', rewardListRoute);

mongoose.connect(process.env.DB_CONNECTION, (error) => {
    console.log(error ? error : 'db connected!');
});

http.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(process.env.PORT || 3000);