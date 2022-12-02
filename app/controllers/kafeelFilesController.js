const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);


const kafeelFilesController = async (files, id) => {
    let front_id_image_kafeel =  files.find(o => (o.fieldname == 'front_id_image_kafeel')) ? files.find(o => (o.fieldname == 'front_id_image_kafeel')).filename : null
    let back_id_image_kafeel =  files.find(o => (o.fieldname == 'back_id_image_kafeel')) ? files.find(o => (o.fieldname == 'back_id_image_kafeel')).filename : null
    let family_book_image_kafeel =  files.find(o => (o.fieldname == 'family_book_image_kafeel')) ? files.find(o => (o.fieldname == 'family_book_image_kafeel')).filename : null
    let income_certificate_kafeel =  files.find(o => (o.fieldname == 'income_certificate_kafeel')) ? files.find(o => (o.fieldname == 'income_certificate_kafeel')).filename : null
    let daman_image_kafeel =  files.find(o => (o.fieldname == 'daman_image_kafeel')) ? files.find(o => (o.fieldname == 'daman_image_kafeel')).filename : null
    let another_attachments_kafeel =  files.find(o => (o.fieldname == 'another_attachments_kafeel')) ? files.find(o => (o.fieldname == 'another_attachments_kafeel')).filename : null

    const updatedRows = await Info.update({

        front_id_image_kafeel: front_id_image_kafeel,
        back_id_image_kafeel:back_id_image_kafeel ,
        family_book_image_kafeel : family_book_image_kafeel,
        income_certificate_kafeel: income_certificate_kafeel ,
        daman_image_kafeel: daman_image_kafeel,
        another_attachments_kafeel: another_attachments_kafeel,

    }
        ,
        {
            where: { id: id }
        }).catch(() => { });

      
    if (updatedRows) {
        return (`Updated rows: ${updatedRows}`);
    } else {
        return "ERROR when update the data";
    };

}



module.exports = kafeelFilesController