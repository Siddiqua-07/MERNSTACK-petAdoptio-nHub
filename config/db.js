const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Pet = require("../models/petModel");
dotenv.config({ path: `${__dirname}/config.env` });
const User = require("../models/userModel");
const db = "mongodb://localhost:27017";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDb is connected.");

    const pets = JSON.parse(
      fs.readFileSync(`${__dirname}/sample-data.json`, "utf-8")
    );

    await User.deleteMany();
    console.log("User Data successfully deleted");

    await Pet.deleteMany();
    console.log("Data successfully deleted");

    await Pet.create(pets);
    console.log("Data successfully loaded");

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  
};

module.exports = connectDB;
