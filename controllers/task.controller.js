import { validationResult } from "express-validator";
import Task from "../models/task.js";

export const addTask = async (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({
            validationError: validationResult(req).array()
        });
    }
    try {
        const task = new Task(req.body);
        

        await task.save();
        res.status(201).json(task)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}

export const getTasks = async (req, res) => {
    try {
        const task = await Task.find()
            .where("Estimation").gt(1)
            .exec();

        res.status(200).json(task)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}
export const getTasksByID = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        res.status(200).json(task)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}


export const patchTaskById = async (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({
            validationError: validationResult(req).array()
        });
    }
    
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndUpdate(id, { Label: req.body.Label }, { new: true });

        res.status(200).json(task)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}