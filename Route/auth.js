const express = require('express');
const router = express.Router();

//@route GET api/auth
//@description GET Logged in user
//@access Private
router.get('/', (req, res) => {
  res.send('Get logged  in usser');
});

//@route POST api/auth
//@description Auth User &get token
//@access Private
router.post('/', (req, res) => {
  res.send('logged  a usser');
});

module.exports = router;
