const Event = require('../Models/Event');

class EventRepo {
    EventRepo() {        
    }

    async getEvent(name) {
        let event = await Event.findOne({name:name}).exec();
        return   event;
    }

    async allEvents() {     
        let events = await Event.find().exec();
        return events;
    }

    async create(eventObj) {
        try {
            // Checks if model conforms to validation rules set in Mongoose.
            var error = await eventObj.validateSync();
    
            // The model is invalid. Return the object and error message. 
            if(error) {
                let response = {
                    obj:          eventObj,
                    errorMessage: error.message };
                return response; // Exit if the model is invalid.
            } 
    
            // Model is not invalid so save it.
            const result = await eventObj.save();
    
            // Success! Return the model and no error message needed.
            let response = {
                obj:          result,
                errorMessage: "" };
            return response;
        } 
        //  Error occurred during the save(). Return orginal model and error message.
        catch (err) {
            let response = {
                obj:          eventObj,
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
            let eventObject = await this.getEvent(editedObj.name);
    
            // Check if Event exists.
            if(eventObject) {
                // Event exists so update it.
                let updated = await Event.updateOne(
                    {name: editedObj.name}, // Match name.
    
                    // Set new attribute values here.
                    {$set: { attendees: editedObj.attendees }}); 
    
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
                
            // Event not found.
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
        let deletedItem =  await Event.find({name:name}).remove().exec();
        console.log(deletedItem);
        return deletedItem;
    }
}
module.exports = EventRepo;
