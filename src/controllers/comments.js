import { connect } from "../database";

export const getComments = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM comments");
  res.json(rows);
};

export const saveComment = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.execute(
      "INSERT INTO tasks(email, comment) VALUES (?, ?)",
      [req.body.email, req.body.comment]
    );
  } catch (error) {
    console.error(error);
  }
};