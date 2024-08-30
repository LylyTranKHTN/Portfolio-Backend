import express from 'express';
import userService from '../services/userService';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userService.getListUser());
});

router.post('/')

module.exports = router;
