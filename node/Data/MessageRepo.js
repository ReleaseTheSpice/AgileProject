const Message = require('../Models/Message');

function sorter(a, b) {
    if (a < b) return -1;  // any negative number works
    if (a > b) return 1;   // any positive number works
    return 0; // equal values MUST yield zero
  }

class MessageRepo {
    MessageRepo() {
    }

    async getNewId() {
        //returns the next available ID for a message in the DB
        let Messages = await this.allMessages();
        let newID = 1;
        let currentIDs = [];
        for (let i=0; i<Messages.length; i++) {
            currentIDs.push(Messages[i]._id);
        }
        currentIDs.sort(sorter);
        currentIDs.forEach(function (value) {
            if (newID == value) { newID++ }
        });
        return newID
    }

    async allMessages() {
        let messages = await Message.find().exec();
        return messages;
    }

    async getMessageById(ID) {
        var message = await Message.findOne({_id: ID}).exec();
        if(message) {
            // let response = { obj: message, errorMessage:"" }
            // Removed until further notice: no need for errorMessage in Get
            return message;
        }
        else {
            return null;
        }
    }

    async create(msgObj) {
            try {
                // Checks if model conforms to validation rules set in Mongoose.
                var error = await msgObj.validateSync();

                // The model is invalid. Return the object and error message.
                if(error) {
                    let response = {
                        obj:          msgObj,
                        errorMessage: error.message };
                    return response; // Exit if the model is invalid.
                }

                // Model is not invalid so save it.
                const result = await msgObj.save();

                // Success! Return the model and no error message needed.
                let response = {
                    obj:          result,
                    errorMessage: "" };
                return response;
            }
            //  Error occurred during the save(). Return original model and error message.
            catch (err) {
                let response = {
                    obj:          msgObj,
                    errorMessage: err.message };

                return  response;
            }
        }

    async update(editedObj) {
            // Set up response object which contains original object and empty error message.
            let response = {
                obj:          editedObj,
                errorMessage: "" };

            try {
                // Ensure the content submitted by the user validates.
                var error = await editedObj.validateSync();
                if(error) {
                    response.errorMessage = error.message;
                    return response;
                }
                // Load the actual corresponding object in the database.
                let msgObj = await this.getMessageById(editedObj._id);

                // Check if Message exists.
                if(msgObj) {
                    // Message exists so update it.
                    let updated = await Message.updateOne(
                        {_id: editedObj._id}, // Match id.

                        // Set new attribute values here.
                        {$set: { votes: editedObj.votes }});

                    // No errors during update.
                    if(updated.nModified!=0) {
                        response.obj = editedObj;
                        return response;
                    }
                    // Errors occurred during the update.
                    else {
                        response.errorMessage =
                            "An error occurred during the update. The item did not save."
                    };
                    return response;
                }

                // Message not found.
                else {
                    response.errorMessage = "An item with this name cannot be found." };
                    return response;
                }

                        // An error occurred during the update.
            catch (err) {
                response.errorMessage = err.message;
                return  response;
            }
        }

    async toggleReply(threadId, replyId) {
        //Adds a message to the list of replies for another message.
        let response = {
            threadId: threadId,
            replyId: replyId,
            errorMessage: "" };

        try {
            let msgObj = await this.getMessageById(threadId);
            let replyObj = await this.getMessageById(replyId);
            
            //If the reply is already there, remove it.
            let newReplies = msgObj.replies
            if (newReplies.indexOf(replyId)>=0) {
                newReplies.remove(replyId);
            } else {
                newReplies.push(replyId);
            }
            console.log("newReplies:",newReplies)
            if (msgObj) {
                let updated = await Message.updateOne(
                    {_id: threadId}, // Match id.

                    // Set new attribute values here.
                    {$set: { replies: newReplies }});

                    // No errors during update.
                    if(updated.nModified!=0) {
                        response.obj = msgObj;
                        return response;
                    }
                    // Errors occurred during the update.
                    else {
                        response.errorMessage =
                            "An error occurred during the update. The item did not save."
                    };
                    return response;
                }

                // Message not found.
                else {
                    response.errorMessage = "An item with this name cannot be found." };
                    return response;
                }
            
                    // An error occurred during the update.
        catch (err) {
            response.errorMessage = err.message;
            return  response;
        }

    }

    async delete(_id) {
        console.log("Id of message to be deleted is: " + _id);
        let msgToDelete = await this.getMessageById(_id)
        //Delete its replies
        for (let i=0; i<msgToDelete.replies.length; i++) {
            let currID = msgToDelete.replies[i];
            let deletedReply = await Message.find({_id:currID}).remove().exec();
            console.log("DELETED REPLY:",deletedReply)
        }

        //If it is a reply, remove it from its thread
        if (msgToDelete.reply) {
            this.toggleReply(msgToDelete.replyingTo, _id)
        }

        let deletedItem =  await Message.find({_id:_id}).remove().exec();
        console.log(deletedItem);
        return deletedItem;
    }


}
module.exports = MessageRepo;

