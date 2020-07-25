const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path')
const fs = require('fs')

const mongodbURL = require("./config/keys").mongodbURL;

const routes = require("./routes/routes");

//process.env.PORT will be used when we deploy it to Heroku or any other Hosting Service
const port = process.env.PORT || 5000;

mongoose
  .connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("Conneted to MongoDB...");

    //Best Practice is to listen to some port after DB Connection
    // app.listen(port, () => {
    //   console.log(`Server Listing at Port ${port}`);
    // });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server Listing at Port ${port}`);
});

//Serve Static Files if in Production for Heroku
if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

//for Production Purpose
if(fs.existsSync(path.resolve(__dirname,'client','build','index.html'))){
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
