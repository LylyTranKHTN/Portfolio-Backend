import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  sql,
} from '@sequelize/core';
import {
  NotNull,
  Attribute,
  Default,
  DeletedAt,
  CreatedAt,
  PrimaryKey,
  Unique,
} from '@sequelize/core/decorators-legacy';

export class Theme extends Model<
  InferAttributes<Theme>,
  InferCreationAttributes<Theme>
> {
  @Attribute(DataTypes.UUID)
  @Default(sql.literal('uuid_generate_v4()'))
  @PrimaryKey
  declare id: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  declare name: string;

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
  @CreatedAt
  declare updatedAt: CreationOptional<Date>;

  @DeletedAt
  declare deletedAt: Date | null;
}
