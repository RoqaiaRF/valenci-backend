const sqlite3 = require('sqlite3').verbose();
var sql;

const infoController = (info) => {

    const db = new sqlite3.Database("./data.db");

    let first_name = info.first_name;
    let second_name = info.second_name;
    let third_name = info.third_name;
    let last_name = info.last_name;
    let national_id = info.national_id;
    let type_doc = info.type_doc;

    let number_doc = info.number_doc;
    let nationality = info.nationality;
    let gender = info.gender;
    let phone = info.phone;
    let isKafeel = info.isKafeel;

    sql = `INSERT INTO data(first_name, second_name, third_name,last_name,national_id,
            type_doc) VALUES
            (${first_name}, ${second_name}, ${third_name},${last_name},${national_id},
            ${type_doc})`
  

    db.run(sql)


}

module.exports = infoController






































// , sqlite3.OPEN_READWRITE, (err) => {
//     if (err) return console.error(err);


  // let first_name_kafeel = info.first_name_kafeel;
    // let second_name_kafeel = info.second_name_kafeel;
    // let third_name_kafeel = info.third_name_kafeel;
    // let last_name_kafeel = info.last_name_kafeel;
    // let national_id_kafeel = info.national_id_kafeel;
    // let type_doc_kafeel = info.type_doc_kafeel;

    // let number_doc_kafeel = info.first_name_kafeel;
    // let nationality_kafeel = info.second_name_kafeel;
    // let gender_kafeel = info.third_name_kafeel;
    // let phone_kafeel = info.last_name_kafeel;

// const sqlcontroller = () => {

//     //Connect to database

//     const db = new sqlite3.Database("../database/data.db", sqlite3.OPEN_READWRITE, (err) => {
//         if (err) return console.error(err);

//     });

//     // CREATE Table
//     sql = `CREATE TABLE data (
// 	id INTEGER PRIMARY KEY,
//     first_name TEXT NOT NULL,
//     second_name TEXT NOT NULL,
//     third_name TEXT NOT NULL,
//     last_name TEXT NOT NULL,
//     national_id TEXT NOT NULL,
//     type_doc TEXT NOT NULL,
//     number_doc TEXT NOT NULL,
//     nationality TEXT NOT NULL,
//     gender TEXT NOT NULL,
//     phone TEXT,

//     first_name_kafeel TEXT,
//     second_name_kafeel TEXT,
//     third_name_kafeel TEXT,
//     last_name_kafeel TEXT ,
//     national_id_kafeel TEXT
//     type_doc_kafeel TEXT,
//     number_doc_kafeel TEXT,
//     nationality_kafeel TEXT,
//     gender_kafeel TEXT,
//     phone_kafeel TEXT,

//     province TEXT NOT NULL,
//     region TEXT NOT NULL,
//     street TEXT NOT NULL,
//     landmark TEXT NOT NULL,
//     house_number TEXT NOT NULL,
//     store_name TEXT NOT NULL,
//     employee_name TEXT NOT NULL,
//     province_kafeel TEXT,
//     region_kafeel TEXT,
//     street_kafeel TEXT ,
//     landmark_kafeel TEXT,
//     house_number_kafeel TEXT,
//     store_name_kafeel TEXT,
//     employee_name_kafeel TEXT,
//     type_of_employment TEXT NOT NULL,
//     employer TEXT NOT NULL,
//     phone_work TEXT NOT NULL,
//     monthly_income_rate TEXT NOT NULL,
//     other_source_of_income TEXT,
//     other_income_value TEXT,
//     is_daman TEXT NOT NULL,
//     type_of_employment_kafeel TEXT,
//     employer_kafeel TEXT,
//     phone_work_kafeel TEXT,
//     monthly_income_rate_kafeel TEXT,
//     other_source_of_income_kafeel TEXT,
//     other_income_value_kafeel TEXT,
//     is_daman_kafeel TEXT,
//     vehicle_type TEXT NOT NULL,
//     vehicle_situation TEXT NOT NULL,
//     first_payment TEXT NOT NULL,
//     installment_period TEXT NOT NULL,
//     front_id_image BLOB NOT NULL,
//     back_id_image BLOB NOT NULL,
//     family_book_image BLOB NOT NULL,
//     income_certificate BLOB,
//     daman_image BLOB,
//     another_attachments BLOB,
//     signiture BLOB NOT NULL,
//     front_id_image_kafeel BLOB,
//     back_id_image_kafeel BLOB,
//     family_book_image_kafeel BLOB,
//     income_certificate_kafeel BLOB,
//     daman_image_kafeel BLOB,
//     another_attachments_kafeel BLOB,
//     signiture_kafeel BLOB
// );`
    // db.run(sql)

//     // // delete table
//     //  db.run("DROP TABLE data");


// }
// sqlcontroller();

