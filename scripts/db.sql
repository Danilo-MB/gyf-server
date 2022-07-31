CREATE DATABASE IF NOT EXISTS commentsdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS comments(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100),
  comment TEXT,
  PRIMARY KEY(id)
);

INSERT INTO comments(email, comment) VALUES
  ('mail@mail.com', 'comment of the post'),
  ('othermail@mail.com', 'other comment of the post');