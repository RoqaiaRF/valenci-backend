const { Sequelize, sequelize } = require("../../database/connection");
const Info = require("../models/Info")(sequelize, Sequelize);

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
    return `Updated rows: ${updatedRows}`;
  } else {
    return "ERROR when update the data";
  }
};

module.exports = signitureFilesController;
