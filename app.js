const express = require('express');
const {validateBody} = require('./middleware/validateUser.mw');
const {createUser, findAll} = require('./controller/uesrController');


const app = express();
const bodyParsing = express.json();

app.post('/createUser', bodyParsing,validateBody, createUser );
app.get('/users',findAll )

app.listen(3008, () => {
    console.log('Server start');
});
