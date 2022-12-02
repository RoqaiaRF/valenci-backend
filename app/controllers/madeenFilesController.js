const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);


const madeenFilesController = async (files, id) => {
    let front_id_image =  files.find(o => (o.fieldname == 'front_id_image')) ? files.find(o => (o.fieldname == 'front_id_image')).filename : null
    let back_id_image =  files.find(o => (o.fieldname == 'back_id_image')) ? files.find(o => (o.fieldname == 'back_id_image')).filename : null
    let family_book_image =  files.find(o => (o.fieldname == 'family_book_image')) ? files.find(o => (o.fieldname == 'family_book_image')).filename : null
    let income_certificate =  files.find(o => (o.fieldname == 'income_certificate')) ? files.find(o => (o.fieldname == 'income_certificate')).filename : null
    let daman_image =  files.find(o => (o.fieldname == 'daman_image')) ? files.find(o => (o.fieldname == 'daman_image')).filename : null
    let another_attachments =  files.find(o => (o.fieldname == 'another_attachments')) ? files.find(o => (o.fieldname == 'another_attachments')).filename : null

console.log("front_id_image: ", front_id_image)

    const updatedRows = await Info.update({

        front_id_image: front_id_image,
        back_id_image:back_id_image ,
        family_book_image : family_book_image,
        income_certificate: income_certificate ,
        daman_image: daman_image,
        another_attachments: another_attachments,
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



module.exports = madeenFilesController