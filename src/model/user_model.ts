import mongoose from "mongoose";


interface CrudInterface{
    title:string;
    description:string;
}

interface CrudDocument extends mongoose.Document{
    title:string;
    description:string;
}


const crudSchema=new mongoose.Schema({
    title:{
        type:String,
        required:false,
    },
    description:{
        type:String,
        required:false
    }
})

interface crudModelInterface extends mongoose.Model<CrudDocument>{
    set(x:CrudInterface):CrudDocument;
}

crudSchema.statics.set = (x:CrudInterface)=>{
    return new CRUD();
}

const CRUD=mongoose.model<CrudDocument,crudModelInterface>("crud",crudSchema);

/* 
CRUD.set({
    "title":"Blow",
    "description":"Blowing"
}) */

export {CRUD};