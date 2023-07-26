const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amritanandsingh999:hoCtuq-cehcaz-1kykpi@db1.jy4oqlc.mongodb.net/?retryWrites=true&w=majority")
    .then(() =>  { console.log("Connected to data Base") })
    .catch((error) =>  { console.log("Failed while connecting to dataBase!") });
