// Importin express module/library
const express = require('express')

// Initializing application name 
const app = express()

// Assiging port number 
const port = 3000

// Middleware assistant for getting data from front end
app.use(express.urlencoded({ extended: true }))

// Middleware assistant for conveting data into json
app.use(express.json({ extended: true }))

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware 
app.use(express.static('static'))


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
  res.status(200).json({success:true})
})



app.listen(port, () => {
    // Write localhost here with port
  console.log(`Example app listening on port http://localhost:${port}`)
})