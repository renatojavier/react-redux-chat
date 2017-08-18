/**
 * Socket.io server
 */
module.exports = (io) => {

    /**
     * server connection
     */
    var numUsers = 0;

    io.on('connection', (socket) => {
        let addedUser = false;

        socket.on('add user', (username) => {
            
        });

        socket.on('disconnect', () => {
            if( addedUser) --numUsers;
        });
    });

}