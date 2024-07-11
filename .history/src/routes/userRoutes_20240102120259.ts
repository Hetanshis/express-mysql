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
    const {createUser, editUser} = this.userController;

    this.router.post("/create", createUser);
    this.router.post("/update", editUser);

   }

   public getRouter(){
    return this.router
   }
}