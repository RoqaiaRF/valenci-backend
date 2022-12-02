const joi = require("@hapi/joi");

const workSchema = {
  work: joi.object({
    id: joi
      .number()
      .integer()
      .min(0)
      .message("Invalid id")
      .max(999999999999)
      .message("Invalid id")
      .required(),

    type_of_employment: joi
      .string()
      .min(2)
      .message(" من فضلك ادخل نوع العمل")
      .required()
      .max(100)
      .message("من فضلك  ادخل  نوع الوظيفة اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    employer: joi
      .string()
      .min(2)
      .message("من فضلك ادخل جهةالعمل بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل جهة العمل اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    phone_work: joi
      .number()
      .integer()
      .min(100000000000)
      .message("رقم الهاتف خاطئ , ادخل رقم هكذا (962712345678)")
      .max(999999999999)
      .message("رقم الهاتف خاطئ  , ادخل رقم هكذا (962712345678)")
      .required(),
    job: joi
      .string()
      .min(2)
      .message("من فضلك ادخل الوظيفة بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل الوظيفة اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    monthly_income_rate: joi
      .string()
      .min(2)
      .message("من فضلك ادخل معدل الدخل الشهري بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    other_source_of_income: joi
      .string().allow(null).allow(''),
    //   .min(2)
    //   .message("من فضلك ادخل مصدر الدخل الاخر بشكل صحيح")
    //   .max(100)
    //   .message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف"),
    other_income_value: joi
    .string().allow(null).allow(''),
    //   .min(2)
    //   .message("من فضلك ادخل قيمة الدخل الاحر بشكل صحيح")
    //   .max(100)
    //   .message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف"),
    is_daman: joi
      .string()
      .min(0)
      .message("من فضلك حدد ان كنت خاضعا للضمان او لا")
      .required()
      .max(100)
      .message("من فضلك  حدد ان كنت خاضعا للضمان او لا")
      .required().messages({
        "string.base": ` لا تترك الحقل فارغ`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),

    type_of_employment_kafeel: joi
    .string().allow(null).allow(''),      // .min(2)
      // .message(" من فضلك ادخل نوع العمل للكفيل")
      // .required()
      // .max(100)
      // .message("من فضلك  ادخل  نوع الوظيفة للكفيل اقل من 100 حرف")
     
    employer_kafeel: joi
    .string().allow(null).allow('')
    ,
    phone_work_kafeel: joi
    .string().allow(null).allow('')

      // .number()
      // .integer()
      // .min(100000000000)
      // .message("رقم الهاتف خاطئ للكفيل , ادخل رقم هكذا (962712345678)")
      // .max(999999999999)
      // .message("رقم الهاتف خاطئ للكفيل , ادخل رقم هكذا (962712345678)")
      ,
    job_kafeel: joi
    .string().allow(null).allow('')

      // .string()
      // .min(2)
      // .message("من فضلك ادخل الوظيفة للكفيل بشكل صحيح")
      // .required()
      // .max(100)
      // .message("من فضلك  ادخل الوظيفة  للكفيل اقل من 100 حرف")
     ,
    monthly_income_rate_kafeel: joi
    .string().allow(null).allow(''),

    //   .string()
    //   .min(2)
    //   .message("من فضلك ادخل معدل الدخل الشهري للكفيل بشكل صحيح")
    //   .required()
    //   .max(100)
    //   .message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف")
    //  ,
    other_source_of_income_kafeel: joi
    .string().allow(null).allow(''),

    other_income_value_kafeel: joi
    .string().allow(null).allow(''),

    is_daman_kafeel: joi
    .allow(null).allow('')

    ,
  }),
};

module.exports = workSchema;
