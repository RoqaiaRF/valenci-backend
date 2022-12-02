const joi = require("@hapi/joi");

const infoSchema = {
    info: joi.object({
        first_name: joi.string().min(2).max(10).required().messages({
            "string.base": `يجب ان ترسل نصا`,
            "string.empty": `لا تترك الحقل فارغا`,
            "string.min": `من فضلك ادخل الاسم الاول  بشكل صحيح"`,
            "any.required": `حقل الاسم الاول اجباري`,
        }),
        second_name: joi
            .string()
            .min(2)
            .message("من فضلك ادخل اسم الاب  بشكل صحيح")
            .required()
            .max(100)
            .message("من فضلك  ادخل اسم الاب اقل من 100 حرف")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل الاسم الثاني  بشكل صحيح"`,
                "any.required": `حقل الاسم الثاني اجباري`,
            }),
        third_name: joi
            .string()
            .min(2)
            .message("من فضلك ادخل اسم الجد  بشكل صحيح")
            .required()
            .max(100)
            .message("من فضلك  ادخل اسم الجد اقل من 100 حرف")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        last_name: joi
            .string()
            .min(2)
            .message("من فضلك ادخل العائلة  بشكل صحيح")
            .required()
            .max(100)
            .message("من فضلك  ادخل العائلة اقل من 100 حرف")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        national_id: joi
            .number()
            .integer()
            .min(100000000)
            .message("ادخل رقم وطني صحيح")
            .max(9999999999999)
            .message("ادخل رقم وطني صحيح")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        gender: joi
            .string()
            .min(2)
            .message("من فضلك  حدد الجنس")
            .required()
            .max(20)
            .message("من فضلك حدد الجنس")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        type_doc: joi
            .string()
            .min(2)
            .message("من فضلك ادخل نوع الوثيقة")
            .required()
            .max(100)
            .message("من فضلك ادخل نوع الوثيقة")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        number_doc: joi
            .string()
            .min(2)
            .message("من فضلك ادخل رقم وثيقة صحيح")
            .max(15)
            .message("من فضلك ادخل رقم وثيقة صحيح")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        nationality: joi
            .string()
            .min(0)
            .message("من فضلك ادخل الجنسية")
            .max(15)
            .message("من فضلك ادخل  الجنسية")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        is_kafeel: joi
            .string()
            .min(0)
            .message("من فضلك  حدد وجود كفيل او لا")
            .max(5)
            .message("من فضلك  حدد وجود كفيل او لا")
            .required().messages({
                "string.base": ` يجب ان ترسل نصا`,
                "string.empty": `لا تترك الحقل فارغا`,
                "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
                "any.required": `حقل اجباري`,
            }),
        phone: joi
            .number()
            .integer()
            .min(100000000000)
            .message("رقم الهاتف خاطئ , ادخل رقم هكذا (962712345678)")
            .max(999999999999)
            .message("رقم الهاتف خاطئ  , ادخل رقم هكذا (962712345678)")
            .required(),

        first_name_kafeel: joi
        .string().allow(null).allow('')

           ,
        second_name_kafeel: joi
        .string().allow(null).allow('')

           ,
        third_name_kafeel: joi
        .string().allow(null).allow('')

            ,
        last_name_kafeel: joi
        .string().allow(null).allow('')

           ,
        national_id_kafeel: joi
        .string().allow(null).allow('')

            ,
        gender_kafeel: joi
        .string().allow(null).allow(''),

        type_doc_kafeel: joi
        .string().allow(null).allow('')

          ,
        number_doc_kafeel: joi
        .string().allow(null).allow('')

            ,
        nationality_kafeel: joi
        .string().allow(null).allow('')

           ,
        phone_kafeel: joi
        .string().allow(null).allow('')

    }),
};

module.exports = infoSchema;
