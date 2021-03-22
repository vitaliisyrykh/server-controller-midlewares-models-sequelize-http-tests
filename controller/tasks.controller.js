const { Tasks } = require('../models/index');

module.exports.createTask = async (req, res, next) => {
    try {
        const { body } = req;
        const newTask = await new Tasks(body);
        res.status(201).send(newTask);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
module.exports.getTasks = async (req, res, next)=>{
    try {
        const allTasks = await Tasks.allTasks();
        res.send(allTasks);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports.findOneTask = async (req, res, next) => {
    try {
        const { params } = req;
        
        const user = await Tasks.findTask(params.id);
        console.log(params.id);
        if (user) {
            return res.send(user);
        }
        throw new Error('Task not found');
    } catch (err) {
        res.status(404).send(err.message);
    }
};

module.exports.updateTask = async (req, res, next) => {
    try {
        const { params, body } = req;

        const foundTask = await Tasks.findTask(params.id);
        console.log(foundTask);
        const updateTask = await foundTask.update(body);
        const responseTask = JSON.stringify(updateTask);
        res.status(202).end(responseTask);
    } catch (err) {
        res.status(400).send(err.message);
    }
};


