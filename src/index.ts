//Imports dependencies
import express from "express"
import dotenv from "dotenv"

//Env variables
dotenv.config();

//Routes imports
import { ping, createuser, searchallusers, searchusersbyid, searchusersbyemail } from "./routes"

//Variables
const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json())


//Routes
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get("/ping", ping)
app.get("/user/new", createuser)
app.get("/user/searchall", searchallusers)
app.get("/user/searchbyid", searchusersbyid)
app.get("/user/searchbyemail", searchusersbyemail)

//Server running
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});