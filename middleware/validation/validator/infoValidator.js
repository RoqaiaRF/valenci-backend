const {
    info
} = require("../schema/infoSchema");

module.exports = {
    addinfoValidation: async (req, res, next) => {
        const value = await info.validate(req.body);
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