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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex)
    }
  }
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa'
import { UsersService } from './userService.js'
let UsersController = class UsersController extends Controller {
  async getUser(userId, name) {
    return new UsersService().get(userId, name)
  }
  async createUser(requestBody) {
    this.setStatus(201) // set return status 201
    new UsersService().create(requestBody)
    return
  }
}
__decorate(
  [
    Get('{userId}'),
    __param(0, Path()),
    __param(1, Query()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Number, String]),
    __metadata('design:returntype', Promise),
  ],
  UsersController.prototype,
  'getUser',
  null,
)
__decorate(
  [
    SuccessResponse('201', 'Created'), // Custom success response
    Post(),
    __param(0, Body()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Promise),
  ],
  UsersController.prototype,
  'createUser',
  null,
)
UsersController = __decorate([Route('users')], UsersController)
export { UsersController }
