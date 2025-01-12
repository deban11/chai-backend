
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

import 'dotenv/config'

// console.log(`Connecting to MongoDB at ${process.env.MONGODB_URI}/${DB_NAME}`);

connectDB();



// const app=express()
/*

;(async()=>{
    try{
        await mongoose.connect('${process.env.MONGODB_URI/${DB_NAME}')
        app.on("error",()=>{
            console.log(error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log("app is listening on port ${process.env.PORT}")
        })
    }
    catch(error){
        console.log(error)
    }

})()

*/
