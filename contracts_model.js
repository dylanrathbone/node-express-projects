var mongoose = require('mongoose');

var contractSchema = mongoose.Schema({
    uniqueMarketReference: String,
    type: String
});

module.exports = mongoose.model('Contract', contractSchema);