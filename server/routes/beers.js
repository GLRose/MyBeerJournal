const express = require("express");
const Beer = require("../models/beerSchema");
const router = express.Router();

router.route("/new").post((req, res) => {
  const newBeer = new Beer(req.body);

  newBeer
    .save()
    .then((beer) => res.json(beer))
    .catch((err) => res.status(400).json("Error! " + err));
});

module.exports = router;
