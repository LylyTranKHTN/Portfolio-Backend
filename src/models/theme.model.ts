import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, sql } from "@sequelize/core";
import { NotNull, Attribute, Default } from "@sequelize/core/decorators-legacy";

export class Theme extends Model<InferAttributes<Theme>, InferCreationAttributes<Theme>> {
    @Attribute(DataTypes.UUIDV4)
    @Default(sql.uuidV4)
    declare id: CreationOptional<string>;

    @Attribute(DataTypes.STRING)
    @NotNull
  declare name:  string;

  @Attribute(DataTypes.STRING)
    @NotNull
  declare title: string;

  @Attribute(DataTypes.STRING)
  declare description: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare value: string;

    @Attribute(DataTypes.DATE)
    @Default(sql.literal('CURRENT_TIMESTAMP'))
  declare createdAt: CreationOptional<Date>;

  @Attribute(DataTypes.DATE)
    @Default(sql.literal('CURRENT_TIMESTAMP'))
  declare updatedAt: CreationOptional<Date>;
}