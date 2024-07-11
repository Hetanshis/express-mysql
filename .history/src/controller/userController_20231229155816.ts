// import { Request, Response } from "express";
// import connection from "../config/db";

// export class UserController {
//   public async createUser(req: Request, res: Response) {
//     try {
//         const {name, email, password, contactNumber, gender} = req.body;

//         connection.query('Insert into test-user SET ?', {name, email, password, contactNumber, gender}, (err, result) => {
//             if(err){
//                 return res.status(200).json({status:false, message:err.message})
//             }else{
//                 console.log(name)
//                 return res.status(200).json({status:true, message:'User create successfully', result})
//             }
//         })
//     } catch (err: any) {
//       return res.status(500).json({ status: false, message: err.message });
//     }
//   }
// }


import { Request, Response } from 'express';
import connection from '../config/db';

export class UserController {
    public async createUser(req: Request, res: Response) {
        try {
            const { name, email, password, contactNumber, gender } = req.body;

            const result = await connection.execute('INSERT INTO test_user SET ?', { name, email, password, contactNumber, gender });

            console.log('Query executed successfully');
            return res.status(200).json({ status: true, message: 'User created successfully', result });
        } catch (err: any) {
            console.error('Error executing query:', err);
            return res.status(500).json({ status: false, message: err.message });
        }
    }
}
