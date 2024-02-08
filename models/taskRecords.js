import {Schema , model, Types } from "mongoose";

const taskRecordsnSchema = new Schema(
    {
        TaskId: {
            type: Types.ObjectId,
            ref: "Task"
        },
        EmloyeeId: {
            type: Types.ObjectId,
            ref: "Employee"
        },
        StartDate: {
            type: Date,
            default: new Date()
        }
    }
);


export default model("TaskRecord", taskRecordsnSchema);