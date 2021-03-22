const express = require('express');
const { validateBody } = require('./middleware/validateUser.mw');
const { validateBodyTasks } = require('./middleware/validateTasks.mw');
const {
    createUser,
    findAll,
    findOne,
    updateUser,
    deleteUser,
} = require('./controller/user.controller');
const {
    createTask,
    findOneTask,
    getTasks,
    updateTask,
    deleteTask
} = require('./controller/tasks.controller');

const app = express();
const bodyParsing = express.json();

app.get('/user/:id', findOne);
app.get('/users', findAll);
app.post('/createUser', bodyParsing, validateBody, createUser);
app.patch('/user/:id', bodyParsing, validateBody, updateUser);
app.delete('/user/:id', deleteUser);

app.post('/createTask', bodyParsing, validateBodyTasks, createTask);
app.get('/tasks', getTasks);
app.get('/task/:id', findOneTask);
app.patch('/task/:id', updateTask);
app.delete('/task/:id', deleteTask);

app.listen(3036, () => {
    console.log('Server start');
});
