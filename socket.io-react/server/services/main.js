const mongoose = require('mongoose');
const messagesModel = require('../models/messagesModel');

mongoose.connect('mongodb://127.0.0.1/REACT_CHAT', {
    useMongoClient: true
});

const db = mongoose.connection;

/**
 * Load History of Messages
 */
exports.loadHistoryMessages = (callback) => {
    messagesModel.find({}, (err, data) => {
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });
};

/**
 * Push message to DB
 */

exports.pushMessage = (data, callback) => {
    messagesModel.create({
        id: data.id,
        username: data.username,
        message: data.message
    }, (err, data) => {
        if(err)
            callback(err, null);
        else
            callback(null, data);
    });
};