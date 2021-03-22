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
        console.log(params);
        const user = await User.getUser(params.id);
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
        
        const foundUser = await User.getUser(params.id);
        
        const updateUser = await foundUser.update(body);
        const responseUser = JSON.stringify(updateUser);
        res.status(202).end(responseUser);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports.deleteUser = async (req, res, next) => {
    try {
      const { params } = req
  
      const foundUser = await User.getUser(params.id)
      const verdict = await foundUser.delete()
  
      res.status(200).send({ verdict })
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
