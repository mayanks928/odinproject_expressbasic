const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}
async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows;
}
async function addMessage({ message, username }) {
  await pool.query("INSERT INTO messages(message,username) VALUES($1,$2);", [
    message,
    username,
  ]);
}

module.exports = { getMessages, addMessage, getMessage };
