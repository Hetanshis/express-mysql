import mysql from "mysql2";
const connection = mysql.createConnection({host:'localhost', port:3306, user:'root', password:'',  database: "test-user",waitForConnections: true,
connectionLimit: 10,
queueLimit: 0,});

const db = connection.connect((err) => {
if(err){
    console.log("error occured while connecting", err)
}else{
    console.log("Database connect successfully")
}
})

export default db;