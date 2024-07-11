import bcrypt from "bcrypt";
const bcryptPassword = (password:string) => {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hash(password, salt);
    return pass
}

export default bcryptPassword