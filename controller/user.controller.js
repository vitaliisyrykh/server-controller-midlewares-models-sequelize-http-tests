const { User } = require('../models/index');

module.exports.createUser = async (req, res, next) => {
    try {
        const { body } = req;
        const newUser = await new User(body);
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).send(newUser);
    }
};

module.exports.findAll = async (req, res, next) => {
    try {
        const allUsers = await User.findAll();
        res.send(allUsers);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports.findOne = async (req, res, next) => {
    try {
        const { params } = req;
        const user = await User.findOne(params.id);
        if (user) {
            return res.send(user);
        }
        throw new Error('User not found');
    } catch (err) {
        res.status(404).send(err.message);
    }
};

module.exports.updateUser = async (req, res, next) => {
    try {
        const { params, body } = req;
        
        const foundUser = await User.findOne(params.id);
        console.log(foundUser);
        const updateUser = await foundUser.update(body);
        const responseUser = JSON.stringify(updateUser);
        res.status(202).end(responseUser);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports.delete = async (req, res, next) => {

}
