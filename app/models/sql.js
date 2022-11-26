const sqlite3 = require('sqlite').verbose();
let sql;

//Connect to database

const db = new sqlite3.Database("../database/data.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);

});

// CREATE Table 
sql = `CREATE TABLE data (
	id INTEGER PRIMARY KEY,
	first_name TEXT NOT NULL,
    second_name TEXT NOT NULL,
    third_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	phone TEXT NOT NULL UNIQUE
);`
db.run(sql)

