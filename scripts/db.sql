CREATE DATABASE IF NOT EXISTS commentsdb;

USE commentsdb;

CREATE TABLE IF NOT EXISTS comments(
  id INT NOT NULL AUTO_INCREMENT,
  postId INT NOT NULL,
  name VARCHAR(100),
  email VARCHAR(100),
  body TEXT,
  PRIMARY KEY(id)
);

INSERT INTO comments(postId, name, email, body) VALUES
  (1, 'name', 'mail@mail.com', 'comment of the post'),
  (1, 'name', 'othermail@mail.com', 'other comment of the post');