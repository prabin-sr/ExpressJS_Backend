const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const isAuthenticated = require('./middlewares/auth');

const app = express();

const port = process.env.PORT || 5000;

// Generic Middlewares
app.use(logger);
app.use(bodyParser.json());

// Unauthorised Routes
app.use('/api/user', require('./routes/user'));

// Authorised Routes
app.use(isAuthenticated);
app.use('/api/profile', require('./routes/profile'));


// Initializing Server
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
});
