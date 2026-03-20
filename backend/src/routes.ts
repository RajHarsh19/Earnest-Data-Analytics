import express from "express";
import { login, register } from "./controllers/auth";
import { authMiddleware } from "./middleware/auth";
import * as taskCtrl from "./controllers/task";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);

router.get("/tasks", authMiddleware, taskCtrl.getTasks);
router.post("/tasks", authMiddleware, taskCtrl.createTask);
router.patch("/tasks/:id", authMiddleware, taskCtrl.updateTask);
router.delete("/tasks/:id", authMiddleware, taskCtrl.deleteTask);
router.patch("/tasks/:id/toggle", authMiddleware, taskCtrl.toggleTask);

export default router;
