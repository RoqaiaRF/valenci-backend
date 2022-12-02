const {
    car
} = require("../schema/carSchema");


const helper = (arrayOfErrors) =>{

    let array= arrayOfErrors.map(function (el) { return [el.context.key,el.message ]; });
      return Object.fromEntries(array);
}

module.exports = {
    addcarValidation: async (req, res, next) => {
        const value = await car.validate(req.body,{ abortEarly: false });
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