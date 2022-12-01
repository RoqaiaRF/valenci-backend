const joi = require("@hapi/joi");

const workSchema = {
    work: joi.object({

        id: joi.number().integer().min(0).message("Invalid id").max(999999999999).message("Invalid id").required(),
       
        type_of_employment: joi.string().min(2).message(" من فضلك ادخل نوع العمل").required().max(100).message("من فضلك  ادخل  نوع الوظيفة اقل من 100 حرف").required(),
        employer: joi.string().min(2).message("من فضلك ادخل جهةالعمل بشكل صحيح").required().max(100).message("من فضلك  ادخل جهة العمل اقل من 100 حرف").required(),
        phone_work: joi.number().integer().min(100000000000).message("رقم الهاتف خاطئ , ادخل رقم هكذا (962712345678)").max(999999999999).message("رقم الهاتف خاطئ  , ادخل رقم هكذا (962712345678)").required(),
        job: joi.string().min(2).message("من فضلك ادخل الوظيفة بشكل صحيح").required().max(100).message("من فضلك  ادخل الوظيفة اقل من 100 حرف").required(),
        monthly_income_rate: joi.string().min(2).message("من فضلك ادخل معدل الدخل الشهري بشكل صحيح").required().max(100).message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف").required(),
        other_source_of_income: joi.string().min(2).message("من فضلك ادخل مصدر الدخل الاخر بشكل صحيح").max(100).message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف"),
        other_income_value: joi.string().min(2).message("من فضلك ادخل قيمة الدخل الاحر بشكل صحيح").max(100).message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف"),
        is_daman: joi.string().min(2).message("من فضلك حدد ان كنت خاضعا للضمان او لا").required().max(100).message("من فضلك  حدد ان كنت خاضعا للضمان او لا").required(),

        type_of_employment_kafeel: joi.string().min(2).message(" من فضلك ادخل نوع العمل للكفيل").required().max(100).message("من فضلك  ادخل  نوع الوظيفة للكفيل اقل من 100 حرف").required(),
        employer_kafeel: joi.string().min(2).message("من فضلك ادخل جهةالعمل للكفيل بشكل صحيح").required().max(100).message("من فضلك  ادخل جهة العمل للكفيل اقل من 100 حرف").required(),
        phone_work_kafeel: joi.number().integer().min(100000000000).message("رقم الهاتف خاطئ للكفيل , ادخل رقم هكذا (962712345678)").max(999999999999).message("رقم الهاتف خاطئ للكفيل , ادخل رقم هكذا (962712345678)").required(),
        job_kafeel: joi.string().min(2).message("من فضلك ادخل الوظيفة للكفيل بشكل صحيح").required().max(100).message("من فضلك  ادخل الوظيفة  للكفيل اقل من 100 حرف").required(),
        monthly_income_rate_kafeel: joi.string().min(2).message("من فضلك ادخل معدل الدخل الشهري للكفيل بشكل صحيح").required().max(100).message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف").required(),
        other_source_of_income_kafeel: joi.string().min(2).message("من فضلك ادخل مصدر الدخل الاخر للكفيل بشكل صحيح").max(100).message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف"),
        other_income_value_kafeel: joi.string().min(2).message("من فضلك ادخل قيمة الدخل الاحر للكفيل بشكل صحيح").max(100).message("من فضلك  ادخل معدل الدخل الشهري اقل من 100 حرف"),
        is_daman_kafeel: joi.string().min(2).message("من فضلك حدد ان كان الكفيل خاضعا للضمان او لا").required().max(100).message("من فضلك  حدد ان كان الكفيل خاضعا للضمان او لا").required(),

    })
};

module.exports = workSchema;
