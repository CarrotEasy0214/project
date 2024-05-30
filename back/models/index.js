import Sequelize from "sequelize";
import mySQLConfig from "../config/config.json" assert { type: "json" };

import RoomModel from "./room/room.js";
import TagModel from "./room/tag.js";
import UserModel from "./user/user.js";

// import CategoryModel from "./board/category.js";
// import BoardModel from "./board/board.js";

const env = process.env.NODE_ENV || "development";
const config = mySQLConfig[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export const Room = RoomModel.init(sequelize);
export const User = UserModel.init(sequelize);
export const Tag = TagModel.init(sequelize);

const db = { Room, User, Tag };

Object.keys(db).forEach((model) => {
  db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
