const Message = require('../models/message.model')

module.exports.getAllMessage = (req, res) => {
    Event.find({})
    .then(messages => {
        console.log(messages);
        res.json({ allmessages: messages })
    })
    .catch(err => {
        console.log(err);
        res.json({ message: 'Something went wrong', error: err });
    })
}


module.exports.CreateMessage = (req, res) => {
    Message.create(req.body)
    .then(newlyCreateMessage => {
        res.status(201).json({ message: newlyCreateMessage })
    })
    .catch((err) => {
        if (err.Message === 'ValidationError') {
            const errors = Object.values(err.errors).map(error => error.message);
            res.status(400).json({ message: 'Validation error', errors: errors });
        } else {
            res.status(500).json({ message: 'Something went wrong', error: err });
        }
    })
}

