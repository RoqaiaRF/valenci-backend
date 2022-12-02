const joi = require("@hapi/joi");

const addressSchema = {
  address: joi.object({
    id: joi
      .number()
      .integer()
      .min(0)
      .message("Invalid id")
      .max(999999999999)
      .message("Invalid id")
      .required(),
    province: joi
      .string()
      .min(2)
      .message("من فضلك ادخل المحافظة بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل المحافظة اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    region: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اسم المنطقة بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم المنطقة اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    street: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اسم الشارع بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم الشارع اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    landmark: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اقرب معلم بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل اقرب معلم اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    house_number: joi
      .string()
      .min(2)
      .message("من فضلك ادخل رقم المنزل بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل رقم المنزل اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    store_name: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اسم المعرض بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل اسم المعرض اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),
    employee_name: joi
      .string()
      .min(2)
      .message("من فضلك ادخل الموظف بشكل صحيح")
      .required()
      .max(100)
      .message("من فضلك  ادخل الموظغ اقل من 100 حرف")
      .required().messages({
        "string.base": ` يجب ان ترسل نصا`,
        "string.empty": `لا تترك الحقل فارغا`,
        "string.min": `من فضلك ادخل المعلومات  بشكل صحيح"`,
        "any.required": `حقل اجباري`,
      }),

    province_kafeel: joi
      .string().allow(null, '')
      .min(3)
      .message("من فضلك ادخل اسم المحافظة للكفيل بشكل صحيح")
      .max(100)
      .message("من فضلك  ادخل اسم المحافظة للكفيل اقل من 100 حرف"),
    region_kafeel: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اسم المنطقة للكفيل بشكل صحيح")
      .max(100)
      .message("من فضلك  ادخل اسم المنطقة للكفيل اقل من 100 حرف"),
    street_kafeel: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اسم الشارع  للكفيل بشكل صحيح")
      .max(100)
      .message("من فضلك  ادخل اسم الشارع للكفيل اقل من 100 حرف"),
    landmark_kafeel: joi
      .string()
      .min(2)
      .message("من فضلك ادخل اقرب معلم للكفيل بشكل صحيح")
      .max(100)
      .message("من فضلك  ادخل اقرب معلم للكفيل اقل من 100 حرف"),
    house_number_kafeel: joi
      .string()
      .min(2)
      .message("من فضلك ادخل رقم المنزل للكفيل بشكل صحيح")
      .max(100)
      .message("من فضلك  ادخل رقم المنزل للكفيل اقل من 100 حرف"),
  }),
};

module.exports = addressSchema;
