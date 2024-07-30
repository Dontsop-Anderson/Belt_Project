const Event = require('../models/event.model')

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Adjust for zero-based indexing
const day = today.getDate();

const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
console.log(today);
// console.log(formattedDate); // Output: YYYY-MM-DD (e.g., 2024-04-03)


module.exports.getAllEvent = (req, res) => {
    Event.find()
    .then(events => {
        // console.log(events);
        res.json({ allevents: events })
    })
    .catch(err => {
        console.log(err);
        res.json({ message: 'Something went wrong', error: err });
    })
}
module.exports.getTodayAllEvent = (req, res) => {
    Event.find({date: { $gt: new Date(), $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)}})
    .then(events => {
        // console.log(events);
        res.json({ allevents: events })
    })
    .catch(err => {
        console.log(err);
        res.json({ message: 'Something went wrong', error: err });
    })
}

module.exports.findOneSingleEvent = (req, res) => {
    Event.findOne({ _id: req.params.id })
    .then(oneSingleEvent => {
        res.json({ event: oneSingleEvent })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.CreateEvent = (req, res) => {
    console.log(req);
    Event.create(req.body)
    .then(newlyCreateEvent => {
        res.status(201).json({ event: newlyCreateEvent })
    })
    .catch((err) => {
        if (err.eventName === 'ValidationError') {
            const errors = Object.values(err.errors).map(error => error.message);
            res.status(400).json({ message: 'Validation error', errors: errors });
        } else {
            res.status(500).json({ message: 'Something went wrong', error: err });
        }
    })
}

module.exports.updateExistingEvent = (req, res) => {
    Event.findOneAndUpdate(
        { _id: req.params.id }, req.body, { new: true, runValidators: true }
    )
    .then(updateEvent => {
        res.json({ event: updateEvent })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}