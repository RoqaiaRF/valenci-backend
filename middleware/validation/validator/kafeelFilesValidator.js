


const kafeelFilesValidator = (files) => {

    let front_id_image_kafeel =  files.find(o => (o.fieldname == 'front_id_image_kafeel')) ? files.find(o => (o.fieldname == 'front_id_image_kafeel')).path : null
    let back_id_image_kafeel =  files.find(o => (o.fieldname == 'back_id_image_kafeel')) ? files.find(o => (o.fieldname == 'back_id_image_kafeel')).path : null
    let family_book_image_kafeel =  files.find(o => (o.fieldname == 'family_book_image_kafeel')) ? files.find(o => (o.fieldname == 'family_book_image_kafeel')).path : null
    let income_certificate_kafeel =  files.find(o => (o.fieldname == 'income_certificate_kafeel')) ? files.find(o => (o.fieldname == 'income_certificate_kafeel')).path : null
    let daman_image_kafeel =  files.find(o => (o.fieldname == 'daman_image_kafeel')) ? files.find(o => (o.fieldname == 'daman_image_kafeel')).path : null

    let result = {}
    if (!front_id_image_kafeel) {
        result.front_id_image_kafeel = " يجب تحميل الصورة الامامية للهوية للكفيل"
    }
    if (!back_id_image_kafeel) {
        result.back_id_image_kafeel = " يجب تحميل الصورة الخلفية للهوية للكفيل"
    }
     if (!family_book_image_kafeel) {
        result.family_book_image_kafeel = " يجب تحميل صورة دفتر العائلة للكفيل للكفيل"
    }
    if (!income_certificate_kafeel) {
        result.income_certificate_kafeel = " يجب تحميل شهادة الراتب للكفيل"
    }
    if (!daman_image_kafeel) {
        result.daman_image_kafeel = " يجب تحميل شهادة الضمان الاجتماعي للكفيل"
    }
return result
   
}

module.exports = kafeelFilesValidator