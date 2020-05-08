var mongoose              = require('mongoose');

// Message Schema
var messageSchema = mongoose.Schema({
    _id: {
        type: Number,
        min:0, max:1000000
    },
    author: {
        type: String,
        required:true
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
    },
    reply: {
        type: Boolean
    },
    replyingTo: {
        type: Number,
        default: -1
    },
    votes: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false,
    collections: 'messages'
});
var Message = module.exports = mongoose.model('Message', messageSchema);
module.exports = Message;
