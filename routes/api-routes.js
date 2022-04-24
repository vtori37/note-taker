const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');
const 
path = require('path');
//to retrieve notes
router.get('/notes', (req, res) => {
  let result = notes;
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});


// to post notes
router.post('/notes', (req, res) => {
req.body.id = notes.length.toString();

});


// to delete notes 
router.delete('/notes/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;