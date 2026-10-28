import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();
const app=express();

//middlewares
app.use(express.json());
app.use(cors());

//port
const PORT=process.env.PORT||5001;

//check server end point
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Application is running "
    })
})

//start server
app.listen(PORT,()=>{
    console.log(`Server is running on Port no ${PORT}`)
})