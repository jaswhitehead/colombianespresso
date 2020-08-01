

USE espresso_db;

CREATE TABLE Socials (
  id INT NOT NULL AUTO_INCREMENT,
  post_title VARCHAR(255) NULL,
  post_body VARCHAR(255) NULL,
  userID INT NOT NULL,
  PRIMARY KEY (id)
);
