const mysql = require('mysql');
var pool = mysql.createPool({
    host: "123.57.142.33",
    port: 3306,
    user: 'webksh',
    password: '@1907Web',
    database: 'itdb',
    connectionLimit: 20
})
module.exports = pool;