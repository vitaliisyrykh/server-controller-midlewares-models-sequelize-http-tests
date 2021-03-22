const yup = require('yup');

const validationSchemes = yup.object({
  body : yup.string().required(),
  userId : yup.string().required()
})

module.exports.validateBodyTasks = async (req, res, next) => {
  let {body} = req;
  try {
      body = await validationSchemes.validate(body);
      next();
  } catch (err) {
      res.status(400).send(err.message);
  }
};