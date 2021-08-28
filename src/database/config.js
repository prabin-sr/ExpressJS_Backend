const mysql_config = {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    user: process.env.MYSQL_USER || 'myuser',
    password: process.env.MYSQL_PASSWORD || 'mypassword',
    database: process.env.MYSQL_DATABASE || 'express_project'
}

exports.mysql_config = mysql_config;
