// Importin express module/library
const express = require('express')
const mongoose = require('mongoose');

// Initializing application name 
const app = express()

// Assiging port number 
const port = 3000

// Mongodb connection uri 
// getting-started.js

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/saad-notes-app');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Middleware assistant for getting data from front end
app.use(express.urlencoded({ extended: true }))

// Middleware assistant for conveting data into json
app.use(express.json({ extended: true }))

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware 
app.use(express.static('static'))

// Creating schema for db
// You can change schema name 
// Add fields for data
const notesSchema = new mongoose.Schema({
  title: String,
  subject: String
}); // Schema is ready 

// Creating a model 
// Write you collection name 
// Add your collection name and schema name in arguements 
const Note = mongoose.model('Note', notesSchema);

// Here we are sending response on the browser
// These are page rendering routes
app.get('/', (req, res) => { // it is even called "end point, router"

  res.render('index')
})

// API 
// These are apis 
app.post('/postNote', (req, res) => { // it is even called "end point, router"
  let data = req.body
  console.log(data)
  Note.create(data)
  res.status(200).json({success:true})
})

app.get('/getNotes', async (req, res) => { // it is even called "end point, router"
  let notes = await Note.find()
  res.send(notes)
})



app.listen(port, () => {
    // Write localhost here with port
  console.log(`Example app listening on port http://localhost:${port}`)
})