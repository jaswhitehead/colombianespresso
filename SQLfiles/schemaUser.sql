USE espresso_db;

CREATE TABLE Users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NULL,
  user_password VARCHAR(255) NULL,
  userID  INT NOT NULL,
  PRIMARY KEY (id)
);