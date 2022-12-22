const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
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
}

const beerRoutes = require("./routes/beers");
app.use("/beers", beerRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Successfully served on port: ${PORT}.`);
});
