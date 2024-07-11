import connection from "../config/db";

export class UserModel{
    public async  createUser(name, email, password, contactNumber, gender) {
        const result = await connection.execute("INSERT INTO test-user(name, email, password, contactNumber, gender) VALUES (?,?,?,?,?)", [name, email, password, contactNumber, gender])

        
    }
}