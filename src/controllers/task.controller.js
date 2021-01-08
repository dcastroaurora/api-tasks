import Task from "../models/Task";
import { getPagination } from "../libs/getPaginations";

export const findTasks = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const condition = title
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};
    const { limit, offset } = getPagination(size, page);

    const tasks = await Task.paginate(condition, { limit, offset });
    res.json({
      totalItems: tasks.totalDocs,
      tasks: tasks.docs,
      totalPages: tasks.totalPages,
      currentPage: tasks.page,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving task",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const taskSave = await newTask.save();
    res.json(taskSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong saving task",
    });
  }
};

export const findTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        message: `Task with id ${id} does not exists`,
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || `Something goes wrong searching task with id ${id}`,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "The task was deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong deleting task",
    });
  }
};

export const findDoneTask = async (req, res) => {
  try {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong searching task",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      message: "Task was updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong searching task",
    });
  }
};
