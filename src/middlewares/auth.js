const jwt = require('jsonwebtoken');



const isAuthenticated = (req, _res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = isAuthenticated;
