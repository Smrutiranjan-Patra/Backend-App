const { adduser, getalluser, getoneuser, updateauser, deleteauser } = require('../controlllers/user.controller');

const router = require('express').Router();

router.post("/", adduser);

router.get('/', getalluser);

router.get('/:id', getoneuser);

router.put("/:id", updateauser);

router.delete("/:id", deleteauser);

module.exports = router;