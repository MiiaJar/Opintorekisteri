const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'lenni',
  database: 'arviointi_db'
});
module.exports = connection;