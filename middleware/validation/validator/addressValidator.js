const {
    address
} = require("../schema/addressSchema");

module.exports = {
    addaddressValidation: async (req, res, next) => {
        const value = await address.validate(req.body,{ abortEarly: false });
        if (value.error) {
            res.status(400)
            res.json({
                success: "Bad request",
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    }
};