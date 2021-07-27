// Requiring installed npm libraries
const express = require('express')
const app = express();

// enable these lines to send fcm msg and test
// const { sendMessage } = require('./firebase.helper');
// sendMessage()
// var router = express.Router();

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

require('./routes.js')(app);

app.listen(process.env.PORT || 3001, () => {
    console.log("listening on port", 3001)
})