const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const messagesSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true
        },
        message: {
            type: String
        }
    }
);

module.exports = Mongoose.model('message', messagesSchema);