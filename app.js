const { response } = require("express");
const express = require("express");
const https = require("https");



const app = express();


 app.get("/", function(req, res){
   const url ="https://api.weatherbit.io/v2.0/current?city=Helsinki&key=6cae79bf4c8e4e3e9b326d7d07b4d479&units=m";
    https.get(url, function(response){
     //console.log("statusCode", response.statusCode);
    // // console.log("headers", response.headers);
        
    response.on("data", function(data){
    
        //var data = process.stdout.write(data);
    //console.log(data);
    // const weatherData = JSON.parse(data);
    // console.log(weatherData);
    //   const temp = data[0].temp;
    //   console.log(temp)
        });
        
     });
    res.send("Server is running")
 });






app.listen(3000, function(){
    console.log("Server is running on port 3000")
})