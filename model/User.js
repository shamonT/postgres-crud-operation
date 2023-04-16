const db = require("../config/db.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.dialect,
  operatorsAliases: false,

  pool: {
    max: db.pool.max,
    min: db.pool.min,
    acquire: db.pool.acquire,
    idle: db.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("error connecting" + err);
  });
// const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re sync done");
});
module.exports = db;
