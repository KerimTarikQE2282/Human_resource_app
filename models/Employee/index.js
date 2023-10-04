const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  hireDate: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  role:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Roles'
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  workExperience: {
    type: String,
  },
  certificates: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
