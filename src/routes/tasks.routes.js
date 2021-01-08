import { Router } from "express";
import "../controllers/task.controller";
import * as controller from "../controllers/task.controller";

const router = Router();

router.post("/", controller.createTask);
router.get("/", controller.findTasks);
router.get("/done", controller.findDoneTask);
router.get("/:id", controller.findTask);
router.delete("/:id", controller.deleteTask);
router.put("/:id", controller.updateTask);

export default router;
