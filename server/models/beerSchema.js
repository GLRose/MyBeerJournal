const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    alcohol_content: { type: Number }
});
const Beer = mongoose.model('Beers', beerSchema);

module.exports = Beer;