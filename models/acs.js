var mongoose = require("mongoose");
var Schema = mongoose.Schema;//constructor para poder generar nuestros esquemas

/*conexion MongoDB*/
mongoose.connect("mongodb://localhost/empresas");

var acs_schema = new Schema({
	open: Number,
	high: Number,
	low: Number,
	close: Number,
});
/*
model => es el constructor que genera los modelos
Database => es el nombre del modelo
*/
var Database = mongoose.model("Database",acs_schema);

module.exports.Database = Database;