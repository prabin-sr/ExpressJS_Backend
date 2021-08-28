const express = require('express');
const connection = require('../database/mysql');

const user_queries = require('../models/user');
const router = express.Router();

const accessTokenSecret = 'sd4jh47fgjh23!8ghGHJH53$35fsg423jdsdjf';

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];


router.get('/', (_req, res) => {
    connection.query(user_queries.show_tables, ['abc'], function (error, rows, fields) {
        if (error) throw error;
        console.log('The solution is: ', rows);
    });

    res.json({ msg: "Hello World! This is user API." });
});

router.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
        res.json({ accessToken });
    } else {
        res.status(401).json({ detail: 'Incorrect username or password.' });
    }
});
// https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
module.exports = router;
