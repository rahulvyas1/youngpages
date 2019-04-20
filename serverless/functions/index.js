const functions = require('firebase-functions');
const Firestore = require('@google-cloud/firestore');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
//  console.log("Hello world");
// });

exports.addUser = functions.https.onRequest(async (req, res) => {
    // [END addMessageTrigger]
      // Grab the text parameter.
      const original = req.query.text;
      const firstName = "firstnametest";
      const lastName = req.query.last;

      // [START adminSdkAdd]
      // Push the new message into the Realtime Database using the Firebase Admin SDK.
      const writeResult = await admin.firestore().collection('Users').add(
          {
              email: original,
              firstName: firstName,
              lastName: lastName

     });
      // Send back a message that we've succesfully written the message
      res.json({result: `Registered with ID: ${writeResult.id} added.`});
    });


    exports.addService = functions.https.onRequest(async (req, res) => {

        //if user is authenticated/ Loggedin

          const serviceName = req.query.serviceName;
          const price = req.query.price;
          const email = "useremailhere";
          const tags = ["tag1", "tag2", "tag3"];
          // [START adminSdkAdd]
          // Push the new message into the Realtime Database using the Firebase Admin SDK.
          const writeResult = await admin.firestore().collection('Users').add(
              {
                  email: original,
                  tags: tags,
                  price: price 
    
         });
          // Send back a message that we've succesfully written the message
          console.log(writeResult);
          res.json({result: `Service added  with ID: ${writeResult.id} added.`});
        });

