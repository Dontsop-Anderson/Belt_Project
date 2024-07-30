const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    eventname: { type: String, required: [true, 'Event name is required'],
    minlength: [3, 'EventName must be atleast 3 characters'], 
    maxlength: [20, 'EventName cannot exceed 50 characters']},
    locationname: { type: String, required: [true, 'Location name is required'],
    minlength: [3, 'LocationName must be atleast 3 characters'], 
    maxlength: [20, 'LocationName cannot exceed 50 characters']},
    date: { type: Date, required: [true, 'Date is required']},
    creatorname: { type: String, required: [true, 'Creator name is required'],
    minlength: [3, 'CreatorName must be atleast 3 characters'], 
    maxlength: [20, 'CreatorName cannot exceed 50 characters']},
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     unique: true
    // }   
}, { timestamps: true });
module.exports = mongoose.model('Event', EventSchema);