const mongoose = require("mongoose");
const express = require('express');
const Beer = require('./models/beerSchema')
const app = express();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

require("dotenv").config();
const URI = process.env.URI;

main().catch((err) => console.log(err));
async function main() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to Database");
  } catch (error) {
    console.error(error);
  }

  app.post('/beers', function(req, res) {
    const entry = new Beer(req.body)
    console.log(entry)
    entry.save()
    res.send("Beer Added");
  })
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Successfully served on port: ${PORT}.`);
});