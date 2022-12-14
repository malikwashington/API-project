import mongoose from "mongoose";
import chalk from "chalk";

let mongooseConnectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set("returnOriginal", false);

const connectionString = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/silly-goose"
mongoose
  .connect(connectionString, mongooseConnectionConfig)
  .catch((err) => {
    console.log(`Error connection go MongoDB: ${err.message}`);
  });

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
