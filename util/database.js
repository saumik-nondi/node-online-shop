const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'first_node_app',
    password: 'johnwick4'
})

module.exports=pool.promise();