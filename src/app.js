import express from "express";
import morgan from "morgan";
import cors from "cors";
import TasksRoutes from "./routes/tasks.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan("dev")); //para que nos aparezca la peticion en el terminal
app.use(express.json()); // para poder entender req.body de objetos json
app.use(express.urlencoded({ extended: false })); // para peticiones que llegan desde formulario HTML

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

app.use("/api/tasks", TasksRoutes);

export default app;
