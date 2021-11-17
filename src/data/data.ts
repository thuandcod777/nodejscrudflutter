import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

  export const mongoDBConnection = async() => mongodb.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology:true,
    },
    async(error,client)=>{
        if(error)throw error;
        console.log("DB Connected!!");

        const database=client.db();
        const collection=database.collection("crud");

        let dataFromMongo=await collection.find().toArray();

        console.log(dataFromMongo);

});
  

export const postDataToMongoDB = () => 
    mongodb.connect(
        process.env.MONGODB_URL as string,
        {
            useUnifiedTopology:true
        },
        async(error,client)=>{
            if(error)throw error;
            console.log("DB Connected!!");
            const database=client.db();
            const collection=database.collection("crud");

            let sendDataToMongoDB = await collection.insertOne(
            {
                name:"soulside7",
                email:"soulside7@gmail.com"
            },
            (err,data)=>{
                if(err) throw err;
                console.log(data);
            }
        )
});
 

export const postManyDataToMongoDB = () => 
    mongodb.connect(
        process.env.MONGODB_URL as string,
        {
            useUnifiedTopology:true
        },
        async(error,client)=>{
            if(error)throw error;
            console.log("DB Connected!!");
            const database=client.db();
            const collection=database.collection("crud");

            let sendDataToMongoDB=await collection.insertMany(     
                [        
                    {       
                        name:"soulside71",          
                        email:"soulside71@gmail.com"      
                    },      
                    {         
                        name:"soulside72",         
                        email:"soulside72@gmail.com"       
                    },    
                ],       
                (err,data)=>{         
                    if(err) throw err;           
                    console.log(data);
                }
                )
            }
            );


export const findOneMongoDB = async() => mongodb.connect(process.env.MONGODB_URL as string,{useUnifiedTopology:true},async(error,client)=>{
    if(error)throw error;
    console.log("DB Connected!!");
    const database=client.db();
    const collection=database.collection("crud");

    const filter={
        name:"soulside7"
    }

   let sendDataToMongoDB=await collection.findOne(
      filter,(err,data)=>{
        if(err) throw err;
        console.log(data);
    }
       
   )
});


export const updateOneDataMongoDB = async() => mongodb.connect(process.env.MONGODB_URL as string,{useUnifiedTopology:true},async(error,client)=>{
    if(error)throw error;
    console.log("DB Connected!!");
    const database=client.db();
    const collection=database.collection("crud");

    const filter={
        name:"souldside71",
    };

    const updateData={
        email: "update",
    };

   let sendDataToMongoDB=await collection.updateOne(
      filter,
      updateData,
       (err,data)=>{
           if(err) throw err;
           console.log(data);
       }
   )
});



export const updateManyDataMongoDB = async() => mongodb.connect(process.env.MONGODB_URL as string,{useUnifiedTopology:true},async(error,client)=>{
    if(error)throw error;
    console.log("DB Connected!!");
    const database=client.db();
    const collection=database.collection("crud");

    const filter={
        name:"soulside72",
    };

    const updateData={
        email: "update email",
    };

   let sendDataToMongoDB=await collection.updateMany(
      filter,
      updateData,
       (err,data)=>{
           if(err) throw err;
           console.log(data);
       }
   )
});


export const deleteOneDataFromDB = ()=> mongodb.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology:true
    },
    async(error,client)=>{

        if(error) throw error;

        console.log("DB Connected!!");

        const database=client.db();
        const collection=database.collection("crud");

        const filter={name:"soulside7"};
        

        let sendDataToMongoDB = await collection.deleteOne(filter,(err,data)=>{
                if(err) throw err;
                console.log(data);
        })

    }
);


export const deleteManyDataFromDB = () => mongodb.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true
    },
    async(error,client)=>{

        if(error) throw error;

        console.log("DB Connected!!");

        const database=client.db();
        const collection=database.collection("crud");

        const filter=
            {name:"soulside72"};


        let sendDataToMongoDB=await collection.deleteMany(filter,(err,data)=>{
            if(err) throw error;
            console.log(data);
        }) 


    }

)