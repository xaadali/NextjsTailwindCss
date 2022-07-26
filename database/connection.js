import mongoose from "mongoose";
//npm i mongoose
//7iBtQ5Z9PJux593b password of mongoose & user KM

const ConnectMongoose = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://KM:7iBtQ5Z9PJux593b@km-testing.grjgv.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connection Successfully");
  } catch (error) {
    console.log(`Connection faild ${error}`);
  }
};
export default ConnectMongoose;
