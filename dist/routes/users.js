"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(userService_1.default.getListUser());
});
router.post('/');
module.exports = router;
