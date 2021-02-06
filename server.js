require('dotenv').config();

const express = require('express');
const app = express();

//Security
const cors = require('cors');
app.use(cors());

//Global Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Connect to DB
const db = require('./db/dbConnection');

//Router
const apiRouter = require('./router/apiRouter');

//API Endpoint
app.use('/api', apiRouter);

//start server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server startet on port ${port}...`));