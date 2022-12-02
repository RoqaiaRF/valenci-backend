const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);

const infoController = async (info) => {
    var id;
    await Info.create({
        first_name: info.first_name,
        second_name: info.second_name,
        third_name: info.third_name,
        last_name: info.last_name,
        national_id: info.national_id,
        type_doc: info.type_doc,
        number_doc: info.number_doc,
        nationality: info.nationality,
        gender: info.gender,
        phone: info.phone,
        is_kafeel: info.is_kafeel,
        first_name_kafeel: info.first_name_kafeel,
        second_name_kafeel: info.second_name_kafeel,
        third_name_kafeel: info.third_name_kafeel,
        last_name_kafeel: info.last_name_kafeel,
        national_id_kafeel: info.national_id_kafeel,
        type_doc_kafeel: info.type_doc_kafeel,
        number_doc_kafeel: info.number_doc_kafeel,
        nationality_kafeel: info.nationality_kafeel,
        gender_kafeel: info.gender_kafeel,
        phone_kafee: info.phone_kafee,
    }).then(result => (id = result.id));

    return id;
}

module.exports = infoController


