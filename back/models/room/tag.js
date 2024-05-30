import { Model, DataTypes } from "sequelize";

export default class Tag extends Model {
  static init(sequelize) {
    return super.init(
      {
        Tag: {
          type: DataTypes.STRING(30),
          unique: true,
          allowNull: false,
        },
        href: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Tag",
        tableName: "tag",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate({ Tag, Room }) {
    Tag.hasMany(Room);
    Tag.hasMany(Tag, {
      as: "children",
      foreignKey: "tagId",
    });
    Tag.belongsTo(Tag, {
      as: "parent",
      foreignKey: "tagId",
    });
  }
}
