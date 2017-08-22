const main = require('../services/main');

/**
 * Socket.io server
 */
module.exports = (io) => {

    /**
     * Server connection
     */
    io.on('connection', (socket) => {
        let addedUser = false;

        socket.on('post message', (data) => {  

            main.pushMessage(data, (err, data) => {
                if( err ){
                    throw new Error(`ERROR posting message of ${data.username}`);
                }
                
                io.sockets.emit('show message to channels', {
                    id: data.id,
                    username: data.username,
                    message: data.message
                });

            });

        });

    });

}