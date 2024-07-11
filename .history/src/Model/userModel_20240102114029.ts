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
}
