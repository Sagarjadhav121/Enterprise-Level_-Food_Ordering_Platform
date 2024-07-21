import express, {Request,Response} from "express"; // Request,Response @types come from express
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

//Database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
  console.log('conected to DataBase !');
  
})

const app = express(); // create new express server  
app.use(express.json()) // middle ware automatically convert body of any req we make to api server to JSON
app.use(cors()) //middleware

// Request,Response @types come from express

//route
app.get('/test',(req:Request, res:Response) => {
  res.json({message:'Hello !!!'})
})

const port:number =7000;
app.listen(port,()=>{
  console.log('server started on local host: '+port);
  
})