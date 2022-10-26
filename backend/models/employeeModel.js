import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    employeeName: {
        type: String,
        required: [true, 'Please add employee name'],
        maxlength: 300
    }
}, {
    timestamps: true
})

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
