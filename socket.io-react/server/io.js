const io = require('socket.io')();

io.on('connection', (socket) => {
    socket.on('post message', (data) => {
        console.log(data.username);
        socket.emit('show message to channels', {
            id: data.id,
            username: data.username,
            message: data.message
        });
    });
});

const port = process.env.PORT || 2087;
io.listen(port);

console.log(`IO is listening at port ${port}...`);
