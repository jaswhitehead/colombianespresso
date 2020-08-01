DROP DATABASE IF EXISTS espresso_db;

CREATE DATABASE espresso_db;

USE espresso_db;

CREATE TABLE Classifieds (
  id INT NOT NULL AUTO_INCREMENT,
  listing_name VARCHAR(255) NULL,
  listing_description VARCHAR(255) NULL,
  listing_location VARCHAR(255) NULL,
  price INT NOT NULL,
  userID INT NOT NULL,
  PRIMARY KEY (id)
);
