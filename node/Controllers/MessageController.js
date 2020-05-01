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
    let newID = await _msgRepo.getNewId()

    // Package object up nicely using content from 'body' of the POST request.
    let tempMessageObj  = new Message( {
        "_id"       : newID,
        "author"    : request.body.author,
        "content"   : request.body.content,
        "date"      : request.body.date,
        "replies"   : request.body.replies,
        "reply"     : request.body.reply,
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

// adds a reply to a message using PUT
exports.AddReply = async function(request, response) {
    //NOTE: THIS DOES NOT JUST ADD REPLIES. IF YOU ADD A REPLY THAT ALREADY EXISTS, IT WILL BE DELETED.

    //FIXME//   THIS DOES NOT DO WHAT IT IS SUPPOSED TO AT ALL.  WHY DOES IT NEED AN ENTIRE MESSAGE? ISN'T ADDING A REPLY
    //FIXME//   A COMBINATION OF MAKING A NEW MESSAGE AND ADDING IT TO THE LIST OF REPLIES OF THE EXISTING MESSAGE?
    //FIXME//   I WOULD ASSUME THAT THE "ADDING" IS WHAT THIS FUNCTION DOES...
    let reqReply = request.body;

    if (reqReply.replies.indexOf(reqReply._id)>=0) {
        reqReply.replies.remove(reqReply._id);
    } else {
        reqReply.replies.push(reqReply._id);
    }
    // Parcel up data in a new object.
    let tempObj  = new Event( {
        "_id"       : newID,
        "author"    : request.body.author,
        "content"   : request.body.content,
        "date"      : request.body.date,
        "replies"   : request.body.replies,
        "reply"     : request.body.reply,
        "votes"     : request.body.votes
    });

    // Call update() function in repository with the object.
    let responseObject = await _eventRepo.update(tempObj);

    // Update was successful.
    if(responseObject.errorMessage === "") {
        response.json({ event:responseObject.obj,
                                            errorMessage:"" });
    }

    // Update not successful. Show form again.
    else {
        response.json( {
            event:      responseObject.obj,
            errorMessage: responseObject.errorMessage });
    }
};

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

exports.Delete = async function(request, response) {
    let id           = request.body._id;
    let messages = await _msgRepo.allMessages();

    // also remove that ID from the "replies" list of other messages
    for (let i=0;i<messages.length;i++) {
        let msg = messages[i]
        if (msg.replies.indexOf(id) >= 0) {
            messages[i].replies.remove(id)
        }
    }

    let deletedItem  = await _msgRepo.delete(id);

    // Some debug data to ensure the item is deleted.
    console.log(JSON.stringify(deletedItem));
    response.json( {messages:messages});
};