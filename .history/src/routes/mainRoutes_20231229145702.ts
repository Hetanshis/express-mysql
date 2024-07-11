import { Router } from "express";
import { UserRoutes } from "./userRoutes";

const mainRouter: Router = Router();
const userRouter: Router= new UserRoutes().getRouter();
mainRouter.use("/user", userRouter )

export default mainRouter