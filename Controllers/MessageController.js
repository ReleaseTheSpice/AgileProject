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

// Gets only select objects.
exports.GetMessagesById = async function(request, response) {
    // request.query used to get url parameter.
    let messagesToGet  = request.query.ids.split(","); 
    let Messages = [];
    for (let i=0;i<messagesToGet.length;i++) {
        let id = messagesToGet[i]
        let msg = await _msgRepo.getMessageById(id);
        if (msg) {
            Messages.push(msg);
        }
    }
    if(Messages != null) {
        response.json({ messages:Messages, errorMessage:"" })
    }
    else {
        response.json( { messages:[], errorMessage:"no messages found" })
    }
}

// creates an message using POST
exports.CreateMessage = async function(request, response) {
    if (request.body._id) {
        var newID = request.body._id;
    } else { var newID = await _msgRepo.getNewId() }
    
    // Package object up nicely using content from 'body' of the POST request.
    let tempMessageObj  = new Message( {
        "_id"       : newID,
        "author"    : request.body.author,
        "content"   : request.body.content,
        "date"      : request.body.date,
        "replies"   : request.body.replies,
        "reply"     : request.body.reply,
        "replyingTo": request.body.replyingTo,
    });

    // Call Repo to save 'Message' object.
    let responseObject = await _msgRepo.create(tempMessageObj);

    // No errors so save is successful.
    if(responseObject.errorMessage == "") {
        //Now call the repo to toggle it as a reply
        if (request.body.reply) {
            let threadId = request.body.replyingTo
            let replyId = newID
            var responseObject2 = await _msgRepo.toggleReply(threadId, replyId);

            ///////////
            console.log("Response from replyFunc:",responseObject2);
        if (responseObject2.errorMessage != '') {
            let deletedItem  = await _msgRepo.delete(newID);
            console.log("There was a problem in adding the reply. The message has been deleted.")
            }
        }
        
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
exports.Vote = async function(request, response) {
    // adds or removes votes from a message

    let msgToVote = await _msgRepo.getMessageById(request.body._id);
    if (request.body.upVote) {
        var vote = 1;
    } else { var vote = -1; }

    // Parcel up data in a new object.
    let tempObj  = new Message( {
        "_id"       : msgToVote._id,
        "author"    : msgToVote.author,
        "content"   : msgToVote.content,
        "date"      : msgToVote.date,
        "replies"   : msgToVote.replies,
        "reply"     : msgToVote.reply,
        "votes"     : msgToVote.votes + vote
    });

    // Call update() function in repository with the object.
    let responseObject = await _msgRepo.update(tempObj);

    // Update was successful.
    if(responseObject.errorMessage === "") {
        response.json({ message:responseObject.obj,
                                            errorMessage:"" });
    }

    // Update not successful. Show form again.
    else {
        response.json( {
            message:      responseObject.obj,
            errorMessage: responseObject.errorMessage });
    }
};

exports.Delete = async function(request, response) {
    let id           = request.body._id;
    let messages = await _msgRepo.allMessages();

    // also remove that ID from the "replies" list of other messages
    for (let i=0;i<messages.length;i++) {
        let msg = messages[i];
        if (msg.replies.indexOf(id) >= 0) {
            messages[i].replies.remove(id)
        }
    }

    let deletedItem  = await _msgRepo.delete(id);

    // Some debug data to ensure the item is deleted.
    console.log(JSON.stringify(deletedItem));
    response.json( {messages:messages});
};

/* istanbul ignore next */
Array.prototype.remove = function() {
    /* istanbul ignore next */
    var what, a = arguments, L = a.length, ax;
    /* istanbul ignore next */
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    /* istanbul ignore next */
    return this;
};
