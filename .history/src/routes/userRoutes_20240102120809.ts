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
    const {createUser, editUser, viewUserById} = this.userController;

    this.router.post("/create", createUser);
    this.router.post("/update", editUser);
    this.router.get("/show", viewUserById);

   }

   public getRouter(){
    return this.router
   }
}