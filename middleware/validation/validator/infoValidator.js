const {
    info
} = require("../schema/infoSchema");


const helper = (arrayOfErrors) =>{

    let array= arrayOfErrors.map(function (el) { return [el.context.key,el.message ]; });
      return Object.fromEntries(array);;
}

module.exports = {
    addinfoValidation: async (req, res, next) => {
        const value = await info.validate(req.body,{ abortEarly: false });
        if (value.error) {
            res.status(400)
            res.json({
                success: "Bad request",
                message: helper(value.error.details) 
            })
        } else {
            next();
        }
    }
};