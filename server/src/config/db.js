import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "nishana",
  password: "123456",
  database: "taskflow",
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Failed ❌", err);
    return;
  }

  console.log("MySQL Connected ");
});

export default db;