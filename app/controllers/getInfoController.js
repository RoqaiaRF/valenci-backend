const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);

const getInfoController = async (id) => {

  let allInfo = await Info.findOne({
        where: {
          id: id
        }
       })
    //.then(result => {
    //  //  console.log(result)
    // }).catch((error) => {
    //     console.error(error)
    //     return 'Failed to retrieve data : ', error;
    // });
    // console.log("all info: ", allInfo.dataValues)
    return allInfo.dataValues 
 }
module.exports = getInfoController
