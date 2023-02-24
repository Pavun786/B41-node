//const express = require("express"); //If pakage.json "type":"common.js" //3rd party package import
 import express from "express"; // If pakage.json "type":"module"....New import methoed
 import {MongoClient} from "mongodb";
 import * as dotenv from "dotenv";
 dotenv.config();


const app = express();

const PORT = process.env.PORT;

//connection:-------
//const MONGO_URL ='mongodb://127.0.0.1';  //127.0.0.1---> is IP of Localhost
const MONGO_URL =process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL); //like phone dial with pincode
// Top level await --->its a advance features of js..condition :use at where is no fuction
await client.connect(); // call
console.log("Mongo is Connected")
//-----------------------------


//Middleware ----> express.json() is inbuild middleware in express..,used to convert JSON --> to JS
 //app.use ---> Intercepts--->writs for common all post methoed
 app.use(express.json());   

 app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩..!");
});

app.get("/movies",async function(request,response){
    //Generaly mongodb shows first 20 results only..so,see others by given "it" for each page
    //so,it's simplified by toArray() use in command line
    //cursor-pagination | Cursor ---> Array | toArray()
    
    //here query params is used for filter the data.
    //& In data,the rating hava a number..others are string.
    //so,when we filter the data by quary,then we got only [].
    //beacause query is intialy assume all datas as a string & try to fing rating:"8".so,we say to query is we want rating: 8  
    if(request.query.rating){
        request.query.rating = +request.query.rating
    }
    const movies =await client.db("users").collection("detail").find(request.query).toArray();//its look like mongodb command:db.detail.findOne({})
    console.log(movies);
    response.send(movies);
})

app.get("/movies/:id",async function(request,response){
    // const {id} = request.params
    // console.log(request.params,id);
    // const movie =movies.find((mv)=> mv.id === id); //find metheod.. find the element by ===
    // console.log(movie);
    // movie ? response.send(movie) : response.status(404).send({message:"movie not found"})
    
    const {id} = request.params
    const movie =await client.db("users").collection("detail").findOne({ id:id})//its look like mongodb command:db.detail.findOne({})
    console.log(movie);
    movie ? response.send(movie) : response.status(404).send({message:"movie not found"})
})

app.post("/movies", async function (request, response) {
    const data = request.body;
    console.log(data);
    const result =await client.db("users").collection("detail").insertMany(data)//its look like mongodb command:db.detail.insertMany({})
    response.send(result)
 });

 app.delete("/movies/:id",async function(request,response){
    
    const {id} = request.params
    const result =await client.db("users").collection("detail").deleteOne({ id:id})//its look like mongodb command:db.detail.deleteOneOne({})
    console.log(result);
    result.deletedCount > 0 ? response.send({message:"Movie deleted sucessfully"}) : response.status(404).send({message:"movie not found"})
})

app.put("/movies/:id",async function(request,response){
   
    const {id} = request.params
    //db.collection name.updateOne({id:" "},{$set:{rating:" "}})
    const movie =await client.db("users").collection("detail").updateOne({ id:id},{$set:request.body})
    console.log(movie);
    movie ? response.send({message:"Movie updated sucessfully"}) : response.status(404).send({message:"movie not found"})
})

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));//App start
