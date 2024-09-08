require("dotenv").config();
const { Client } = require("pg");
QUERY = `
CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
message TEXT NOT NULL,
username VARCHAR(255) NOT NULL,
datetime TIMESTAMPTZ DEFAULT NOW());

INSERT INTO messages(message,username)
VALUES ('Test message 1. Hello.','user001'),
('Test message 1. Hello.','user001'), 
('Hi.','022user'), 
('working?','xyz21'), 
('checking. ab_2424','user001')
`;
async function main() {
  console.log("starting populating");

  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  });
  await client.connect();
  await client.query(QUERY);
  await client.end();
  console.log("done");
}
main();
