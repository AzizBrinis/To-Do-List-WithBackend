const mongoose = require("mongoose");

const connectDB = async (dataBase) => {
  try {
    mongoose.connect(
      dataBase,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => (err ? console.log(err) : console.log("mongoose is connected"))
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;