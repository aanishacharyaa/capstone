const express = require("express");
const mongoose = require('mongoose');
const DB = "mongodb+srv://flyingstars:kiyJdFEp5QSmivc@cluster.jp4yocn.mongodb.net/?retryWrites=true&w=majority";
 
const contacts_router = require("./routes/capstone_projectroutes");
 
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
app.use(contacts_router)
// Connections
mongoose
  .connect(DB)
  .then(() => { 
    console.log("db Connection Successful");

    app.listen(PORT, "localhost", () => {
      console.log(`connected at port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });

