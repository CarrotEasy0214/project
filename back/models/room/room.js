import { Model, DataTypes } from "sequelize";

export default class Room extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(30),
        },
        tag: {
          type: DataTypes.STRING(30),
        },
      },
      {
        sequelize,
        modelName: "Room",
        tableName: "room",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate({ Room, Tag }) {
    Room.belongsTo(Tag);
  }
}
