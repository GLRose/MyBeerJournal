const express = require("express");
const Beer = require("../models/beerSchema");
const router = express.Router();

//New entry for beers  CREATE
router.route("/new").post(async (req, res) => {
  const newBeer = new Beer(req.body);
  console.log(newBeer);
  try {
    const beerExists = await Beer.findOne({ newBeer });
    if (beerExists === req.body) {
      return res.status(400).send("Beer already exists in the database");
    }
  } catch (err) {
    console.log(err);
  }
  newBeer.save();
  res.send("New beer entry created in the database");
});

//Retrieve all beers READ
router.route("/").get(async (req, res) => {
  try {
    Beer.find().then((allBeers) => res.json(allBeers));
  } catch (err) {
    console.log(allBeers);
  }
  res.send(allBeers);
});

//Change a current available entry UPDATE
router.route("/update/:id").put(async (req, res) => {
  try {
    Beer.findByIdAndUpdate(req.params.id, req.body).then((beer) => res.json("Beer entry updated"));
  } catch (err) {}
});
//Delete a entry available in the database DELETE
router.route("/delete/:id").delete((req, res) => {
  Beer.deleteOne({ _id: req.params.id }).then((success) => res.json("Beer Entry deleted from the database"));
});

try {
} catch (err) {}

module.exports = router;
