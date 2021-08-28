const express = require('express');

const connection = require('../database/mysql');

const router = express.Router()

router.get('/', (_req, res) => {
    connection.query('SHOW TABLES;', function (err, rows, fields) {
        if (err) throw err;
      
        console.log('The solution is: ', rows);
      });
    res.json({ msg: "Hello World! This is profile API." });
});

module.exports = router;
