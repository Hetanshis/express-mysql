import { Router } from "express";
import { UserController } from "../controller/userController";

export class UserRoutes {
   private router: Router;
   private userController: UserController;
   constructor(){
    this.router= Router();
    this.userController = new UserController();
    this.setUpRoutes()
   }

   private setUpRoutes(){
    const {createUser} = this.userController;

    this.router.post("/user/create", createUser)

   }

   public getRouter(){
    return this.router
   }
}