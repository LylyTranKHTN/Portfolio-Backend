var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v)
  }
import { DataTypes, Model } from '@sequelize/core'
import {
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
} from '@sequelize/core/decorators-legacy'
export class User extends Model {}
__decorate(
  [
    Attribute(DataTypes.INTEGER),
    PrimaryKey,
    AutoIncrement,
    __metadata('design:type', Object),
  ],
  User.prototype,
  'id',
  void 0,
)
__decorate(
  [Attribute(DataTypes.STRING), NotNull, __metadata('design:type', String)],
  User.prototype,
  'firstName',
  void 0,
)
__decorate(
  [Attribute(DataTypes.STRING), __metadata('design:type', Object)],
  User.prototype,
  'lastName',
  void 0,
)
