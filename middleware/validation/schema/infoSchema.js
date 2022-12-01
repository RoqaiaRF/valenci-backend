const joi = require("@hapi/joi");

const infoSchema = {
    info: joi.object({
        first_name: joi.string().min(2).max(100).required(),
        second_name: joi.string().min(2).max(100).required(),
        third_name: joi.string().min(2).max(100).required(),
        last_name: joi.string().min(2).max(100).required(),
        national_id:joi.number().integer().min(100000000).message("national_id must be more than 9 charachter").max(9999999999999).message("national_id must be less than 13 charachter").required(),
        gender: joi.string().valid("male", "female").required(),
        type_doc: joi.string().valid("id", "passport").required(),
        number_doc: joi.string().min(3).max(12).required(),
        nationality: joi.string().valid("jordainian", "notjordainian").required(),
        is_kafeel: joi.boolean().valid(true, false).required(),
        phone: joi.number().integer().min(100000000000).message("Invalid mobile number: must be like (962712345678)").max(999999999999).message("Invalid mobile number : must be like (962712345678)").required(),
        first_name_kafeel: joi.string().min(2).max(100),
        second_name_kafeel: joi.string().min(2).max(100),
        third_name_kafeel: joi.string().min(2).max(100),
        last_name_kafeel: joi.string().min(2).max(100),
        national_id_kafeel:joi.number().integer().min(100000000).message("national_id_kafeel must be more than 9 charachter").max(9999999999999).message("national_id_kafeel must be less than 13 charachter"),
        gender_kafeel: joi.string().valid("male", "female"),
        type_doc_kafeel: joi.string().valid("id", "passport"),
        number_doc_kafeel: joi.string().min(3).max(12),
        nationality_kafeel: joi.string().valid("jordainian", "notjordainian"),
        phone_kafeel: joi.number().integer().min(100000000000).message("Invalid mobile number kafeel : must be like (962712345678)").max(999999999999).message("Invalid mobile number kafeel : must be like (962712345678)")
        
    })
};

module.exports = infoSchema;
