const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);
const sendEmailController = require ("./sendEmailController")
const signitureFilesController = async (signiture, id) => {
  const updatedRows = await Info.update(
    {
      signiture: signiture,
    },
    {
      where: { id: id },
    }
  ).catch(() => {});

  if (updatedRows) {
   await sendEmailController(id)
    return `Updated rows: ${updatedRows}`;
  } else {
    return "ERROR when update the data";
  }
};

module.exports = signitureFilesController;
