var mongoose = require('mongoose')
var Schema  = mongoose.Schema


var DokumentSchema = new Schema({
    name : String, 
    owner : String
})

module.exports = mongoose.model('Dokument', DokumentSchema )
