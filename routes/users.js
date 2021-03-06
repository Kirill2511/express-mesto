const router = require('express').Router();
const { getUsers, getUser, createUser } = require('../controllers/users.js');

router.get('/', getUsers);
router.get('/:_id', getUser);
router.post('/', createUser);

module.exports = router;
