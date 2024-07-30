const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
    message: { type: String, required: [true, 'Message is required'],
    minlength: [3, 'Message must be atleast 3 characters'], 
    maxlength: [20, 'Message cannot exceed 50 characters']},
}, { timestamps: true });
module.exports = mongoose.model('Message', MessageSchema);