const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);

const front_idController = async (info, id) => {
    console.log(id)
  
    const [updatedRows] =  await Info.update({
        front_id_image : info
    }
        ,
        {
            where: { id: id},
        }).catch(() => { });

    if (updatedRows) {
        return (`Updated rows: ${updatedRows}`);
        } else {
        return "User not found";
        }
}

module.exports = front_idController