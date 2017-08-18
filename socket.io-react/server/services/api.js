const router = require('express').Router();
const main = require('./main');

router.get('/get-messages', (req, res, next) => {
    main.loadHistoryMessages((err, data) => {
        if( err ) res.send('ERROR Fetching messages...');
        res.send(data);
    });
});

module.exports = router;