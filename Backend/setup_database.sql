-- Script to set up the database and user for the As React project.
-- Please run this script in your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or terminal).

CREATE DATABASE IF NOT EXISTS as_react;
CREATE USER IF NOT EXISTS 'bansri'@'localhost' IDENTIFIED BY 'bansri@2306';
GRANT ALL PRIVILEGES ON as_react.* TO 'bansri'@'localhost';
FLUSH PRIVILEGES;

-- To verify:
-- USE as_react;
-- SHOW GRANTS FOR 'bansri'@'localhost';
