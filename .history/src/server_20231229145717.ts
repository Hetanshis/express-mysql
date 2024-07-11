import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
dotenv.config()
import connection from "./config/db";
import mainRouter from "./routes/mainRoutes";
connection;

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("", mainRouter)

app.listen(`${process.env.PORT}`, () => {
    console.log(`Server is running on this PORT:${process.env.PORT}`)
})