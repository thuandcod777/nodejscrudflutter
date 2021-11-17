import express,{Request,Response} from "express";
import { CRUD } from "../model/user_model";

const router=express.Router();


/* router.get("/",(req:Request,res:Response)=>{
    const {name,email}=req.body;

    console.log(name);
    console.log(email);
    res.json({
        user: {
            name,
            email
        },
    })
})

export {router}; */

//post request

router.post("/add",async(req:Request,res:Response)=>{

    const dataItem = new CRUD({title:req.body.title,description:req.body.description}); 
  
  /*   const dataItem = CRUD.set({ title,description }); */

    await dataItem.save();

    return res.status(200).json({
        data:dataItem
    })
});


//get request

router.get("/",async(req:Request,res:Response)=>{
    try{
        const dataItem=await CRUD.find({});
        res.status(200).json({
            data:dataItem
        });
    }catch(error){
        console.log(error);
    }
});


//delete request

router.delete("/delete",async(req:Request,res:Response)=>{

    const filter={
        title:req.body.title,
    }
        
    const dataItem=await CRUD.deleteOne(filter).then((data)=>res.json({          
        data:data       
    })      
    ).catch((error)=>{       
        return res.send(error);
       
    });
    
});


//update request

router.delete("/update",async(req:Request,res:Response)=>{

    const filter={
        title:req.body.title,
    }

    const updateData={
        description:req.body.description,
    };

    
        
    const dataItem=await CRUD.updateOne(filter,updateData,
        {         
            new: true,      
        }).then((data)=>res.json({         
            data:data        
        })        
        ).catch((error)=>{
            return res.send(error);      
        });
    
});

export {router};