const mysql = require('mysql2');
require('dotenv').config(); 

// Creating the connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
});


module.exports = pool.promise(); // Using promise-based API for async/await support
