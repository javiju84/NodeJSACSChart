var express = require ("express");
var app = express();
var request = require("request");
var fs = require('fs');
var Database = require("./models/acs").Database;

var aDocs = JSON.parse(fs.readFileSync('./data.json'));
for (var n = 0; n < aDocs.length; n++){
	var docToAdd = new Database(aDocs[n]);
	docToAdd.save(function(error,docToAdd){
		if (error) return console.error(error)
	});
}

app.listen(7070);
console.log("Servidor conectado puerto 7070");