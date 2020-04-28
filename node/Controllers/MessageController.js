const Message           = require('../Models/Message');
// var   passport       = require('passport');
// const RequestService = require('../Services/RequestService');
const MessageRepo       = require('../Data/MessageRepo');
const _msgRepo      = new MessageRepo();

// Gets all the Messages using GET
exports.GetMessages = async function(request, response) {
    let Messages = await _msgRepo.allMessages();
    if(Messages != null) {
        response.json({ messages:Messages, errorMessage:"" })
    }
    else {
        response.json( { messages:[], errorMessage:"no messages found" })
    }
};

// creates an message using POST
exports.CreateMessage = async function(request, response) {
    // Package object up nicely using content from 'body' of the POST request.
    let tempMessageObj  = new Message( {
        "name" : request.body.name,
        "date" : request.body.date,
        "time" : request.body.time,
        "description" : request.body.description
    });

    // Call Repo to save 'Message' object.
    let responseObject = await _msgRepo.create(tempMessageObj);

    // No errors so save is successful.
    if(responseObject.errorMessage == "") {
        console.log('Saved without errors.');
        console.log(JSON.stringify(responseObject.obj));
        response.json({ message:responseObject.obj,
            errorMessage:""});
    }
    // There are errors.
    else {
        console.log("An error occured. Item not created.");
        console.log('EM:',responseObject.errorMessage);
        response.json( {
            message:responseObject.obj,
            errorMessage:responseObject.errorMessage});
    }
};
