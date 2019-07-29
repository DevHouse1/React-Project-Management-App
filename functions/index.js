const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.projectCreated = functions.firestore.document('projects/{project}').onCreate(doc => {
    // run this code when a document gets added to the projects collection

    const project = doc.data();
    const notification = {
        content: "Added a new project",
        user: project.authorFirstName + ' ' + project.authorLastName,
        time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
})

const createNotification = (notification) => {
    return admin.firestore().collection("notifications")
        .add(notification).then(doc => {
            console.log('Notification Added', doc);
        });
}

exports.userJoined = functions.auth.user().onCreate(user => {
    return admin.firestore().collection("users").doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: "New user joined",
            user: newUser.firstName + ' ' + newUser.lastName,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })
})

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


