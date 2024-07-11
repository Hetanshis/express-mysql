import { Request, Response } from "express";
import connection from "../config/db";

export class UserController {
  public async createUser(req: Request, res: Response) {
    try {
        const {name, email, password, conatctNumber, gender} = req.body;

        connection.query('Insert into test-user SET ?', {name, email, password, conatctNumber, gender}, (err, result) => {
            if(err){
                return res.status(200).json({status:false, message:err.message})
            }else{
                return res.status(200).json({status:true, message:'User create successfully', result})
            }
        })
    } catch (err: any) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}
