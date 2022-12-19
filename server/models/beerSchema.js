const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new mongoose.Schema({
    name: String,
    type: String,
    alcohol_content: Number,
});
const Beer = mongoose.model('Beers', beerSchema);

module.exports = Beer;