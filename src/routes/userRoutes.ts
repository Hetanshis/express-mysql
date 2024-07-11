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
    const {createUser, editUser, viewUserById, deleteUserById} = this.userController;

    this.router.post("/create", createUser);
    this.router.post("/update", editUser);
    this.router.get("/show", viewUserById);
    this.router.get("/delete", deleteUserById);

   }

   public getRouter(){
    return this.router
   }
}