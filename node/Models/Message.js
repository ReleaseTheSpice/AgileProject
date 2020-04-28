var mongoose              = require('mongoose');

// Message Schema
var messageSchema = mongoose.Schema({
    _id: {
        type: Number
    },
    content: {
        type: String,
        required:true
    },
    date: {
        type: String,
        required:true
    },
    replies: {
        type: Array,
        default: []
    }
}, {
    versionKey: false,
    collections: 'messages'
});
var Message = module.exports = mongoose.model('Message', messageSchema);
module.exports = Message;
