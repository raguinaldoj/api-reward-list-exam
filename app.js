const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const rewardListRoute = require('./routes/rewardListRoute');
require('dotenv/config');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());

app.get('/', () => {
    console.log('api successfully running!');
});

app.use('/rewardList', rewardListRoute);

mongoose.connect(process.env.DB_CONNECTION || 'mongodb+srv://admin:password2020@app-list-db.dsmed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , (error) => {
    console.log(error ? error : 'db connected!');
});

app.listen(process.env.HOST || 3000);