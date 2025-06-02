const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    registerNumber: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    center: { type: String, required: true },
    age: { type: Number, required: true },
    teachersFeeTaken: { type: String, enum: ['Yes', 'No'], required: true },
    willTeachersFeeBeTaken: { type: String, enum: ['Yes', 'No'], required: true }
});

module.exports = mongoose.model('Student', studentSchema);
