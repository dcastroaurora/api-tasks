import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false, //evita que aparezca __v
    timestamps: true, //para que aparezcan las propiedades createAt y UpdatedAt
  }
);

taskSchema.plugin(paginate);
export default model("Task", taskSchema);
