/**
 * @author Luis Odar Iván Zambrano Paredes
 */
var mongoose = require('mongoose');
var BDTienda = mongoose.connect('mongodb://localhost/BDTienda');
module.exports = BDTienda;