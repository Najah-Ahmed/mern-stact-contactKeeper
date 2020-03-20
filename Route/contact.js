const express = require('express');
const router = express.Router();

//!@route GET api/contact
//!@description GET all user contacts from  user only
//!@access Private
router.get('/', (req, res) => {
  res.send('Get all contact ');
});

//!@route POST api/contact
//!@descriptionAdd new contact
//!@access Private
router.post('/', (req, res) => {
  res.send('create new contact');
});

//!@route PUT api/contact/:id
//!@description Update contact from api
//!@access Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//!@route Delete api/contact/:id
//!@description Delete contact
//!@access Private
router.delete('/:id', (req, res) => {
  res.send('deleted contact');
});

module.exports = router;
