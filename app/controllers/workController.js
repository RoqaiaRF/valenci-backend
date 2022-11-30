const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);

const workController = async (info) => {
    var id;
    const updatedRows =  await Info.update({
        type_of_employment : info.type_of_employment,
        employer : info.employer,
        phone_work : info.phone_work,
        monthly_income_rate : info.monthly_income_rate,
        other_source_of_income : info.other_source_of_income,
        other_income_value : info.other_income_value,
        is_daman : info.is_daman,
        type_of_employment_kafeel: info.type_of_employment_kafeel, 
        employer_kafeel : info.employer_kafeel,
        phone_work_kafeel : info.phone_work_kafeel,
        monthly_income_rate_kafeel : info.monthly_income_rate_kafeel,
        other_source_of_income_kafeel : info.other_source_of_income_kafeel,
        other_income_value_kafeel : info.other_income_value_kafeel,
        is_daman_kafeel : info.is_daman_kafeel,
    }
        ,
        {
            where: { id: info.id },
        }).catch(() => { });

    if (updatedRows) {
        return (`Updated rows: ${updatedRows}`);
        } else {
        return "ERROR when update the data";
        }
}

module.exports = workController