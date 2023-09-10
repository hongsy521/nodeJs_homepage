let mysql = require('mysql2');
let db = mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:''
});
db.connect();

module.exports=db;