const joi = require("@hapi/joi");

const carSchema = {
  car: joi.object({
    id: joi
      .number()
      .integer()
      .min(0)
      .message("Invalid id")
      .max(999999999999)
      .message("Invalid id")
      .required(),
    vehicle_type: joi
      .string()
      .min(2)
      .message("من فضلك ادخل نوع المركبة بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل نوع المركبة اقل من 100 حرف")
      .required()
      .messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    vehicle_situation: joi
      .string()
      .min(2)
      .message("من فضلك ادخل حالة المركبة بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل حالة المركبة اقل من 100 حرف")
      .required()
      .messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    first_payment: joi
      .string()
      .min(2)
      .message("من فضلك ادخل الدفعة الاولى بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل الدفعة الاولى اقل من 100 حرف")
      .required()
      .messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
      installment_period: joi
      .string()
      .min(2)
      .message("من فضلك ادخل مدة التقسيط بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل مدة التقسيط اقل من 100 حرف")
      .required()
      .messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
  }),
};

module.exports = carSchema;
