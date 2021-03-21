const express = require('express');
const { validateBody } = require('./middleware/validateUser.mw');
const {
    createUser,
    findAll,
    findOne,
    updateUser
} = require('./controller/user.controller');

const app = express();
const bodyParsing = express.json();

app.get('/user/:id', findOne);
app.get('/users', findAll);
app.post('/createUser', bodyParsing, validateBody, createUser);
app.patch('/user/:id', bodyParsing,  updateUser);

app.listen(3035, () => {
    console.log('Server start');
});
