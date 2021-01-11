import { config } from "dotenv";

config();

export default {
  mongodbURL:
    process.env.MONGODB_URI ||
    "mongodb+srv://dcastro:marvelvsc2@cluster0.8npch.mongodb.net/taskapi?retryWrites=true&w=majority",
};
