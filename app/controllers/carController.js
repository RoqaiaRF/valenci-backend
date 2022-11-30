const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);

const carController = async (info) => {
    const updatedRows =  await Info.update({
        vehicle_type : info.vehicle_type,
        vehicle_situation : info.vehicle_situation,
        first_payment : info.first_payment,
        installment_period : info.installment_period,
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

module.exports = carController