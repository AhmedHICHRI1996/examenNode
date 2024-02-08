import { Router } from "express";
import { addEmployee, getEmployees } from "../controllers/employee.controller.js";
import { body } from "express-validator";
import multerConfig from "../middlewares/multer-config.js";

const router = Router();


router.post("/create",
    multerConfig("image"),
    body("Name").isLength({ min: 3, max: 30 }),
    body("Departement").isLength({ min: 3, max: 30 }),
    body("HireDate").isDate(),
    addEmployee);

router.get("/getAll", getEmployees)



export default router;