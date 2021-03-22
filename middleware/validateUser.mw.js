const yup = require('yup');

const validationSchemes = yup.object({
    name: yup.string().required(),
    email: yup
        .string()
        
        .required(),
    password: yup.string().required(),
    genders: yup.string().required(),
    age: yup.string().required(),
});

module.exports.validateBody = async (req, res, next) => {
    let {body} = req;
    try {
        body = await validationSchemes.validate(body);
        next();
    } catch (err) {
        res.status(400).send(err.message);
    }
};
