const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'styc',
    password: 'password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }).promise();

module.exports = {
    pool
}