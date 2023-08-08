const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port:'3306',
        user :'ad',
        password : 'dev2023',
        database :"dbinc"
    }
);

connection.connect((error)=>{
    if(error) throw error;
    console.log("Connected to the db");
});

connection.end();