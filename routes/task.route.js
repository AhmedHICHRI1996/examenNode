

import { Router } from "express";
import { addTask, getTasks, getTasksByID, patchTaskById } from "../controllers/task.controller.js";
import { body } from "express-validator";

const router = Router();


router.post("/",
    body("Label").isLength({ min: 8 }),
    body("Description").isLength({ min: 8 }),
    body("Estimation").isNumeric().isLength({ min: 0.5, max: 20 }),
    addTask);

    router.get("/", getTasks);
    router.get("/:id", getTasksByID);
    router.patch("/:id",
    body("Label").isLength({ min: 5 }),
    patchTaskById)

export default router;