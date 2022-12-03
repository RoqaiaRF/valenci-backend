const madeenFilesValidator = (files) => {
  let front_id_image = files.find((o) => o.fieldname == "front_id_image")
    ? files.find((o) => o.fieldname == "front_id_image").path
    : null;
  let back_id_image = files.find((o) => o.fieldname == "back_id_image")
    ? files.find((o) => o.fieldname == "back_id_image").path
    : null;
  let family_book_image = files.find((o) => o.fieldname == "family_book_image")
    ? files.find((o) => o.fieldname == "family_book_image").path
    : null;
  let income_certificate = files.find(
    (o) => o.fieldname == "income_certificate"
  )
    ? files.find((o) => o.fieldname == "income_certificate").path
    : null;
  let daman_image = files.find((o) => o.fieldname == "daman_image")
    ? files.find((o) => o.fieldname == "daman_image").path
    : null;

  let result = {};
  if (!front_id_image) {
    result.front_id_image = " يجب تحميل الصورة الامامية  للهوية";
  }
  if (!back_id_image) {
    result.back_id_image = " يجب تحميل الصورة الخلفية للهوية ";
  }
  if (!family_book_image) {
    result.family_book_image = " يجب تحميل صورة دفتر العائلة    ";
  }
  if (!income_certificate) {
    result.income_certificate = " يجب تحميل شهادة الراتب  ";
  }
  if (!daman_image) {
    result.daman_image = " يجب تحميل شهادة الضمان الاجتماعي  ";
  }
  return result;
};

module.exports = madeenFilesValidator;
