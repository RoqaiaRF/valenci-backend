const {
    work
} = require("../schema/workSchema");

module.exports = {
    addworkValidation: async (req, res, next) => {
        const value = await work.validate(req.body);
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