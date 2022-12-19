const mongoose = require("mongoose");
const Beer = require("./models/beerSchema");
require("dotenv").config();
require("./models/beerSchema");

const URI = process.env.URI;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to Database");
  } catch (error) {
    console.error(error);
  }

  const entry = new Beer({ name: 'Sierra', type: 'IPA', alcohol_content: 3});
  entry.save(function(err){
      if(err) return handleError(err);
  })
}
