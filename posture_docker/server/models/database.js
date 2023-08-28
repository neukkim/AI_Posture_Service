const mysql =  require('mysql2/promise');

require("dotenv").config();
console.log('In_database.js, : DB_USER', process.env.DB_USER);
const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = db