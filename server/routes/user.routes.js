const UserController = require('../controllers/user.controller');
const EventController = require('../controllers/event.controller');
const MessageController = require('../controllers/message.controller')
const { authenticate } = require('../middleware/authenticate.middleware');

module.exports = (app) => {
    app.post('/api/user/register', UserController.register);
    app.post('/api/user/login', UserController.login);
    app.post('/api/user/logout', authenticate, UserController.logout);
    app.get('/api/event',  EventController.getAllEvent);
    // app.get('/api/user',  UserController.getAllUser);
    app.get('/api/event/:id',  EventController.findOneSingleEvent);
    // app.get('/api/user/:id',  UserController.findOneSingleUser);
    app.post('/api/event',  EventController.CreateEvent);
    app.post('/api/message', MessageController.CreateMessage);
    app.get('/api/message', MessageController.getAllMessage);
    app.patch('/api/event/edit/:id', EventController.updateExistingEvent);
}