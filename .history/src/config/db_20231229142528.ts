import mysql from "mysql2";
const connection = mysql.createConnection({host:'localhost', port:3306, database:'Express-test', user:'root', password:'root'});

connection.connect((err) => {
if(err){
    console.log("error occured while connecting")
}else{
    console.log("Database connect successfully")
}
})