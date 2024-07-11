import { Request, Response } from "express";

export class UserController {
    public async createUser(req:Request, res:Response) {
        try{

        }catch(err:any){
            return res.status(500).json({status:false, message:err.message})
        }

    }
}