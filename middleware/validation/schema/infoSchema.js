const joi = require("@hapi/joi");

const infoSchema = {
  info: joi.object({
    first_name: joi.string().min(2).max(10).required().messages({
      "string.base": `"a" should be a type of 'text'`,
      "string.empty": `لا تدخل رساله فارغه يا فتي`,
      "string.min": `"a" should have a minimum length of {#limit}`,
      "any.required": `"a" is a required field`,
    }),
    second_name: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اسم الاب  بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم الاب اقل من 100 حرف")
      .required(),
    third_name: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اسم الجد  بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم الجد اقل من 100 حرف")
      .required(),
    last_name: joi
      .string()
      .min(2)
      .message("من فضلك ادخل العائلة  بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل العائلة اقل من 100 حرف")
      .required(),
    national_id: joi
      .number()
      .integer()
      .min(100000000)
      .message("ادخل رقم وطني صحيح")
      .max(9999999999999)
      .message("ادخل رقم وطني صحيح")
      .required(),
    gender: joi
      .string()
      .min(2)
      .message("من فضلك الجنس")
      .required()
      .max(100)
      .message("من فضلك حدد الجنس")
      .required(),
    type_doc: joi
      .string()
      .min(2)
      .message("من فضلك ادخل نوع الوثيقة")
      .required()
      .max(100)
      .message("من فضلك ادخل نوع الوثيقة")
      .required(),
    number_doc: joi
      .string()
      .min(2)
      .message("من فضلك ادخل رقم وثيقة صحيح")
      .max(15)
      .message("من فضلك ادخل رقم وثيقة صحيح")
      .required(),
    nationality: joi
      .string()
      .min(10)
      .message("من فضلك ادخل الجنسية")
      .max(15)
      .message("من فضلك ادخل  الجنسية")
      .required(),
    is_kafeel: joi
      .string()
      .min(3)
      .message("من فضلك  حدد وجود كفيل او لا")
      .max(5)
      .message("من فضلك  حدد وجود كفيل او لا")
      .required(),
    phone: joi
      .number()
      .integer()
      .min(100000000000)
      .message("رقم الهاتف خاطئ , ادخل رقم هكذا (962712345678)")
      .max(999999999999)
      .message("رقم الهاتف خاطئ  , ادخل رقم هكذا (962712345678)")
      .required(),

    first_name_kafeel: joi
      .string()
      .min(2)
      .message(" من فضلك ادخل الاسم الاول للكفيل")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم الاول  للكفيل اقل من 100 حرف")
      .required(),
    second_name_kafeel: joi
      .string()
      .min(2)
      .message(" من فضلك ادخل اسم الاب للكفيل")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم الاب للكفيل اقل من 100 حرف")
      .required(),
    third_name_kafeel: joi
      .string()
      .min(2)
      .message(" من فضلك ادخل اسم الجد للكفيل")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم  للكفيل الجد اقل من 100 حرف")
      .required(),
    last_name_kafeel: joi
      .string()
      .min(2)
      .message(" من فضلك ادخل العائلة للكفيل")
      .required()
      .max(100)
      .message("من فضلك  ادخل العائلة  للكفيل اقل من 100 حرف")
      .required(),
    national_id_kafeel: joi
      .number()
      .integer()
      .min(100000000)
      .message("ادخل رقم وطني صحيح للكفيل")
      .max(9999999999999)
      .message(" ادخل رقم وطني صحيح للكفيل")
      .required(),
    gender_kafeel: joi
      .string()
      .min(2)
      .message(" من فضلك الجنس للكفيل")
      .required()
      .max(100)
      .message(" من فضلك حدد الجنس للكفيل")
      .required(),
    type_doc_kafeel: joi
      .string()
      .min(2)
      .message("من فضلك ادخل نوع الوثيقة للكفيل")
      .required()
      .max(100)
      .message("من فضلك ادخل نوع الوثيقة للكفيل")
      .required(),
    number_doc_kafeel: joi
      .string()
      .min(2)
      .message("من فضلك ادخل رقم وثيقة صحيح للكفيل")
      .max(15)
      .message("من فضلك ادخل رقم وثيقة صحيح للكفيل")
      .required(),
    nationality_kafeel: joi
      .string()
      .min(10)
      .message(" من فضلك ادخل الجنسية للكفيل")
      .max(15)
      .message("من فضلك ادخل  الجنسية")
      .required(),
    phone_kafeel: joi
      .number()
      .integer()
      .min(100000000000)
      .message("رقم الهاتف خاطئ  للكفيل, ادخل رقم هكذا (962712345678)")
      .max(999999999999)
      .message("رقم الهاتف خاطئ  للكفيل, ادخل رقم هكذا (962712345678)")
      .required(),
  }),
};

module.exports = infoSchema;
