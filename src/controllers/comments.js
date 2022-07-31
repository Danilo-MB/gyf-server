import { connect } from "../database";

export const getComments = async (req, res) => {
  const connection = await connect();
  const comments = await connection.query("SELECT * FROM comments");
  return res.json(comments[0]);
};

export const saveComment = async (req, res) => {
  const newComment = req.body;
  const connection = await connect();
  try {
      await connection.query("INSERT INTO comments SET ?", [{
          postId: newComment.postId,
          name: newComment.name,
          email: newComment.email,
          body: newComment.body
      }]);
      return res.json({
          message: "Comment saved"
      });
  }
  catch (e) {
      console.log(e, "error");
      res.statusCode = 500;
      return res.json(e);
  }
};