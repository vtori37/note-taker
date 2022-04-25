const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const notes = require('../db/db.json');

//to retrieve notes
router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), (err,data) => {
  if(err) res.sendStatus(404);
  console.log(data);
  res.json(JSON.parse(data));
  console.log(process.cwd());
  })
});


// to post notes
router.post('/notes', (req, res) => {
  const newNotes = req.body
  newNotes.id = uuidv4();
  let readData = (path.join(__dirname,('../db/db.json', "utf8")));

  notes.push(newNotes);

  fs.writeFile('../db/db.json', JSON.stringify(notes), err => {
    if (err) { res.sendStatus(404);
    } else {
      console.log('Note saved.');
    }
})
res.json(readData);
});


// to delete notes 
router.delete('/notes/:id', (req, res) => {
  let savedNotesId = req.params.id;
  let readData = (path.join(__dirname('../db/db.json', "utf8")));

  let findData = readData.filter(note => note.id.length !== note)
});


module.exports = router;