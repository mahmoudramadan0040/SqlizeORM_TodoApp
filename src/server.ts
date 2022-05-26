import express,{Response,Request} from "express";
import db from "./config/database.config";
import {v4 as uuidv4} from 'uuid';
import { TodoInstance } from "./model";

db.sync().then(()=> {
    console.log("connect to db");
});
const app =express();
const Port = 4000;

app.use(express.json());
app.get("/",(req:Request,res:Response)=>{
    return res.send("hellow world");
});
app.post("/create",async(req:Request,res:Response)=>{
    const id = uuidv4();
    try{
        console.log(id);
        
        const record = await TodoInstance.create({...req.body , id});
        console.log("hello");
        console.log(req.body)
        return res.json({record,msg:"succrssfully create todo"});
    }catch(e){
        // return res.json({msg:"fails to create",status:500,route:"/create"})
        return res.send(e);
    }
    
})
app.listen(Port,()=>{
    console.log("server is running on port : ",Port)
})

// try {
//     db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
