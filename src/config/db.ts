import mysql from "mysql2";
const connection = mysql.createConnection({host:'localhost', port:3306, user:'root', password:'',  database: "test-user"});

const db = async () => {
    try{
        await connection.connect();
        console.log("Database connected successfully");
    }catch(err:any){
        console.log(err.message)
    }
}

db();


export default connection;