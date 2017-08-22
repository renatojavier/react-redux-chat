const router = require('express').Router();
const main = require('./main');

router.get('/get-messages', (req, res, next) => {
    main.loadHistoryMessages((err, data) => {
        if( err ) res.send('ERROR Fetching messages...');
        res.send(data);
    });
});

router.post('/post-message', (req, res, next) => {
    
    main.pushMessage(req.body, (err, data) => {
        if( err ) res.send(`ERROR posting message of ${data.username}`);
        res.send(data);
    });
    
});

module.exports = router;