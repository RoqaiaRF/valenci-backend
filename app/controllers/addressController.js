const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);

const addressController = async (info) => {
    var id;
    const updatedRows =  await Info.update({
        province: info.province,
        region: info.region,
        street: info.street,
        landmark: info.landmark,
        house_number: info.house_number,
        store_name: info.store_name,
        employee_name: info.employee_name,
        province_kafeel: info.province_kafeel,
        region_kafeel: info.region_kafeel,
        street_kafeel: info.street_kafeel,
        landmark_kafeel: info.landmark_kafeel,
        house_number_kafeel: info.house_number_kafeel,
     
    }
        ,
        {
            where: { id: info.id },
        }).catch(() => { });

    if (updatedRows) {
        return (`Updated rows: ${updatedRows}`);
        } else {
        return "User not found";
        }
}

module.exports = addressController
