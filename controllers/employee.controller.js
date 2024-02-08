import { validationResult } from "express-validator";
import Employee from "../models/employee.js";

export const addEmployee = async (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({
            validationError: validationResult(req).array()
        });
    }
    try {
        const employee = new Employee(req.body);
        employee.image = `http://localhost:9090/img/${req.file.filename}`;
        await employee.save();
        res.status(201).json(employee)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}

// export const getEmployees = async (req, res) => {
//     try {
//         const epmloyees = await Employee.find()
//         res.status(200).json(epmloyees)
//     } catch (e) {
//         console.log(e);
//         res.status(500).end("Internal Server Error")
//     }
// }

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
            .select("_id Name Departement HireDate image")
            .exec();

            res.status(200).json(employees)
        } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}