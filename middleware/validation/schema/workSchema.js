const joi = require("@hapi/joi");

const workSchema = {
    work: joi.object({

        id: joi.number().integer().min(0).message("Invalid id").max(999999999999).message("Invalid id").required(),
        type_of_employment: joi.string().valid("employee", "work_owner", "house_wife", "other").required(),
        employer: joi.string().min(2).max(100).required(),
        phone_work: joi.number().integer().min(0).message("Invalid phone it must be like : 962712345678 ").max(999999999999).message("Invalid phone it must be like : 962712345678 ").required(),
        job: joi.string().min(2).max(100).required(),
        monthly_income_rate: joi.string().min(2).max(100).required(),
        other_source_of_income: joi.string().min(2).max(100),
        other_income_value: joi.string().min(2).max(100),
        is_daman: joi.boolean().valid(true, false).required(),
        type_of_employment_kafeel: joi.string().valid("employee", "work_owner", "house_wife", "other"),
        employer_kafeel: joi.string().min(2).max(100),
        phone_work_kafeel: joi.number().integer().min(0).message("Invalid phone kafeel it must be like : 962712345678 ").max(999999999999).message("Invalid phone kafeel it must be like : 962712345678 ").required(),
        job_kafeel: joi.string().min(2).max(100),
        monthly_income_rate_kafeel: joi.string().min(2).max(100),
        other_source_of_income_kafeel: joi.string().min(2).max(100),
        other_income_value_kafeel: joi.string().min(2).max(100),
        is_daman_kafeel: joi.boolean().valid(true, false),

    })
};

module.exports = workSchema;
