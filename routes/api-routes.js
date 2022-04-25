const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');
const notes = require('../db/db.json');
//to retrieve notes
router.get('/notes', (req, res) => {
  fs.readFile(notes, (err,data) => {
  if(err) res.sendStatus(404);
  console.log(data);
  res.json(JSON.parse(data));
  })
});


// to post notes
router.post('/notes', (req, res) => {
req.body.id = notes.length.toString();
fs.writeFile
});


// to delete notes 
router.delete('/notes/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;