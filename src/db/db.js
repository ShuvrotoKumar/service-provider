const mongoose = require("mongoose");


async function connectDB(){
    await mongoose.connect("mongodb+srv://service:service@service.tdc3sak.mongodb.net/?appName=service/service")

    console.log("MongoDB connected");
}

module.exports = connectDB;