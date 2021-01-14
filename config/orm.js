var connection = require("./connection.js");

// Object Relational Mapper

var orm = {
	selectAll: function(tableName, bg) {
		var queryString = "SELECT * FROM ??";
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			bg(result);
		});
	},
	insertOne: function(tableName, bg) {
		var queryString = "INSERT INTO ??";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			bg(result);
		});
	},
	updateOne: function() {
		var queryString = "UPDATE burgers SET ? WHERE ?";
		console.log(queryString);
		connection.query(queryString, [colName, ], function(err, result) {
			console.log(result);
		});
	},
}

module.exports = orm;