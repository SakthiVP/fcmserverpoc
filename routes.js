module.exports = (app) => {
    const notes = require('./firebase.helper.js');

    // Create a new Note
    app.post('/sendNotification', notes.sendMessage);

}