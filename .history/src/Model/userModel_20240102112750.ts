import connection from "../config/db";

export class UserModel {
  public async createUser(
    name: any,
    email: any,
    password: any,
    contactNumber: any,
    gender: any
  ) {
    const result = await connection.execute(
      "INSERT INTO test-user(name, email, password, contactNumber, gender) VALUES (?,?,?,?,?)",
      [name, email, password, contactNumber, gender]
    );
    return result;
  }
}
