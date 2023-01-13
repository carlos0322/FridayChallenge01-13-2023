import { createConnection } from "mysql2";

const connection = createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Issac070815",
  database: "classicmodels",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

//To read data from the database, you can use the SELECT SQL statement.
//You can use the query method to execute the SQL statement and retrieve the data.

connection.query("SELECT * FROM customers", (err, rows) => {
  if (err) throw err;
  console.log(rows);
});

//To create a new record in the database, you can use the INSERT INTO SQL statement.
// You can use the query method to execute the SQL statement and pass the data to be inserted as an object.

connection.query(
    "INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country,creditLimit) VALUES (510, 'Stephanie', 'Lopez', 'Carlos', '9876543210', '123 main Steet', '456 2nd Street', 'Charlotte', 'NC', '28273', 'USA', '50000')",
  
    function (err, result) {
      if (err) throw err;
      console.log("New user created ");
    }
  );

//To update a record in the database, you can use the UPDATE SQL statement.
//You can use the query method to execute the SQL statement and pass the updated data as an object.

connection.query(
    "UPDATE customers SET customerName = 'Stephanie' WHERE customerNumber = 510",
    function (err, result) {
      if (err) throw err;
      console.log(" record(s) updated");
    }
  );
//To delete a record from the database, you can use the DELETE SQL statement.
//You can use the query method to execute the SQL statement and pass the ID of the record to be deleted.

connection.query(
    "DELETE FROM customers WHERE addressLine2 = '456 2nd Street' ",
    function (err, result) {
      if (err) throw err;
      console.log(" record(s) deleted");
    }
  );