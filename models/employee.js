import {Schema , model} from "mongoose";

const employeeSchema = new Schema(
    {
        Name: String,
        Departement: String,
        HireDate: Date,
        image: String
    }
);


export default model("Employee", employeeSchema);

