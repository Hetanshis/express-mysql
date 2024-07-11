import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

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


app.listen(`${process.env.PORT}`)