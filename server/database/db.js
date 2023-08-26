import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-7wqzydz-shard-00-00.bafhxyn.mongodb.net:27017,ac-7wqzydz-shard-00-01.bafhxyn.mongodb.net:27017,ac-7wqzydz-shard-00-02.bafhxyn.mongodb.net:27017/?ssl=true&replicaSet=atlas-x7ep9p-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected");
  } catch (error) {
    console.log("error while connecting the database", error);
  }
};

export default Connection;
