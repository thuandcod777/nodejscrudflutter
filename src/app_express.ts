import express, { Request, Response } from "express";
import { updateOneDataMongoDB } from "./data/data";
import { router } from "./routes/routes";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());
/* 
mongoDBConnection();  */
/* postDataToMongoDB(); */
/* postManyDataToMongoDB(); */
/* postManyDataToMongoDB();
findOneMongoDB();
updateDataMongoDB(); */

/* deleteOneDataFromDB(); */

/*  deleteManyDataFromDB(); */
 
/* updateOneDataMongoDB();
 */ 


/* app.get("/",(req:Request,res:Response)=>{
    const data=req.url;

    res.status(200).json({
        message:data,
    })
});
 */

mongoose.connect( 
    process.env.MONGODB_URL as string, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
    } as ConnectOptions,
    ()=>{console.log("DB Connected!!");
});

app.use("/",router);

const port = process.env.PORT || '5000';

app.listen(port,()=>{
    console.log(`Server is rocking at ${port}`);
});

