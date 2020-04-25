var mongoose              = require('mongoose');

// Event Schema
var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true // Index ensures property is unique in db.
    },
    date: {
        type: String,
        required:true
    },
    time: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    attendees: {
        type: Array,
        default: []
    }
}, {
    versionKey: false,
    collections: 'events'
});
var Event = module.exports = mongoose.model('Event', eventSchema);
module.exports = Event;