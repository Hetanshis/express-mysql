import connection from "../config/db";
import bcryptPassword from "../utils/bcryptPassword";

export class UserModel {
  static async addUsers(
    name: any,
    email: any,
    password: any,
    contactNumber: any,
    gender: any
  ) {

    const pass = await bcryptPassword(password)
    const result = await connection.execute(
      "INSERT INTO user(name, email, password, contactNumber, gender) VALUES (?,?,?,?,?)",
      [name, email, pass, contactNumber, gender]
    );
    return result;
  }

  static async updateUser(
    id:any,
    name: any,
    email: any,
    password: any,
    contactNumber: any,
    gender: any){
        const pass = await bcryptPassword(password)
        const result = await connection.execute("UPDATE user SET name=? , email=? ,password=?, contactNumber=?, gender=? WHERE id=?", [name, email, pass, contactNumber, gender,id])
        return result
    }

    static async showUser(id:any){
        const result = await connection.execute("SELECT * FROM user WHERE id=?", [id]);
        return result
    }
}
