require('dotenv').config();

const express = require('express');
const app = express();

//Security
app.set('trust proxy', true);
const cors = require('cors');
app.use(cors());
const rateLimit = require('express-rate-limit')({
     windowMs: 20 * 60 * 1000,
     max: 100
});

//helmet
const helmet = require('helmet');
app.use((req, res, next) => {
     res.locals.cspNonce = crypto.randomBytes(16).toString("hex");
     next();
});
app.use(helmet({
     contentSecurityPolicy: {
          directives: {
               ...helmet.contentSecurityPolicy.getDefaultDirectives(),
               scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.cspNonce}'`],
          },
     }
}));

//Global Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Connect to DB
const db = require('./db/dbConnection');

//Router
const apiRouter = require('./router/apiRouter');

//API Endpoint
app.use('/api', rateLimit)
app.use('/api', apiRouter);

//start server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server startet on port ${port}...`));