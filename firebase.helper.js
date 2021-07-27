const admin = require('firebase-admin')


const serviceAccount = require("./pentaquest-serviceAccount.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// The topic name can be optionally prefixed with "/topics/".
const topic = 'fcm_test';

var count = 0 


module.exports.sendMessage = (req, res) => {
    // Send a message to devices subscribed to the provided topic.
    count += 1
    let  message = {
        data: {
            count: `${count}`,
            title: 'Hi All FCM Test',
            body: 'Notes are available'
        },
        topic: topic
    };
    
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
            res.json({ message: 'Message Sent Successfully' });  
        })
        .catch((error) => {
            console.log('Error sending message:', error);
            res.json({ message: 'Error on send message' });  
        });
}



