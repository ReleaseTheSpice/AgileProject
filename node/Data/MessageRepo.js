const Message = require('../Models/Message');

class MessageRepo {
    MessageRepo() {
    }
/*
    async getMessage(id) {
         let message = await Message.findOne({_id:id}).exec();
         return   message;
     }*/

    async allMessages() {
        let messages = await Message.find().exec();
        return messages;
    }

    async getMessageById(ID) {
        var message = await Message.findOne({_id: ID}).exec();
        if(message) {
            let response = { obj: message, errorMessage:"" }
            return response;
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
                        {name: editedObj.name}, // Match name.

                        // Set new attribute values here.
                        {$set: { replies: editedObj.replies }});

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

        async delete(name) {
            console.log("Item to be deleted is: " + name);
            let deletedItem =  await Message.find({name:name}).remove().exec();
            console.log(deletedItem);
            return deletedItem;
        }


}
module.exports = MessageRepo;

