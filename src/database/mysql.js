const mysql = require('mysql');

const config = require('./config')

var connection = mysql.createConnection(config.mysql_config);

connection.connect();
// connection.end();

module.exports = connection;
