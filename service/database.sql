CREATE database restaurantmanager;
use restaurantmanager;
CREATE TABLE menu (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  codeItem VARCHAR(255) NOT NULL,
  nameItem VARCHAR(255) NOT NULL,
  imgItem BLOB,
  classify VARCHAR(255) NOT NULL,
  endow INT,
  isNew BOOLEAN,
  isHot BOOLEAN,
  isSeller BOOLEAN,
  feedback JSON,
  statusItem BOOLEAN NOT NULL,
  price INT NOT NULL
);
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nameOrder VARCHAR(255),
  img LONGBLOB,
  price INT,
  statusOrder VARCHAR(255),
  dispatch VARCHAR(255),
  noteOrder VARCHAR(255),
  nameClient VARCHAR(255),
  phoneClient VARCHAR(255),
  quantity INT
);
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  codeUser VARCHAR(255) NOT NULL,
  nameUser VARCHAR(255) NOT NULL,
  avtUser BLOB,
  username VARCHAR(255) NOT NULL,
  pass VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  roleUser VARCHAR(255) NOT NULL,
  cart JSON
);
