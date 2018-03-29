var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn:{
        type: Number,
        required: true
    },
    isRead:{
        type: Boolean,
        default: false
    },
    isOwned:{
        type: Boolean,
        default: false
    },
    review:{
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Book', BookSchema)