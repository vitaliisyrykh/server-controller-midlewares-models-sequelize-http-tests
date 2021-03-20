const express = require('express');
const {validateBody} = require('./middleware/validateUser.mw');
const {createUser} = require('./controller/uesrController');

const app = express();
const bodyParsing = express.json();

app.post('/createUser', bodyParsing,validateBody, createUser );

app.listen(3007, () => {
    console.log('Server start');
});
