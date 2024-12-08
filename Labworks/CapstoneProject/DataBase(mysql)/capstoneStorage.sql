CREATE DATABASE LMS;
USE LMS;
create table register(id int AUTO_INCREMENT PRIMARY key , Name varchar(100), email VARCHAR(100), password VARCHAR(100), mobile VARCHAR(100), gender VARCHAR(100));
desc register;

insert into register VALUES(1,"Bhargav","bhargav@gmail.com","Bhargav@123",6305134345,"Male"),(2,"Uday","uday@gmail.com","Uday@123",9754322405,"male");
select * from register;
desc register;
CREATE TABLE members (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    number VARCHAR(10) NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL
);

INSERT INTO members (id, name, email, number, gender) VALUES
('LM001', 'Alice', 'alice@example.com', '9725271772', 'Female'),
('lM002', 'Bob', 'bob@example.com', '9825123456', 'Male'),
('LM003', 'Charlie', 'charlie@example.com', '9123456789', 'Male');
select * from members;

CREATE TABLE catalogues (
    id VARCHAR(10) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    year INT NOT NULL
);

INSERT INTO catalogues (id, title, author, year) VALUES
('LC001', 'Java Basics', 'John Doe', 2021),
('LC002', 'Python Fundamentals', 'Jane Smith', 2020),
('LC003', 'Database Systems', 'Alice Brown', 2019);
select * from catalogues;

CREATE TABLE circulations (
    id VARCHAR(10) PRIMARY KEY,
    book_id VARCHAR(10) NOT NULL,
    book_title VARCHAR(255) NOT NULL,
    member_id VARCHAR(10) NOT NULL,
    action ENUM('Borrowed', 'Returned') NOT NULL,
    date DATE NOT NULL,
    due_date DATE DEFAULT NULL,
    return_date DATE DEFAULT NULL,
    borrowed_book_id VARCHAR(10) DEFAULT NULL,
    FOREIGN KEY (member_id) REFERENCES members(id),
    FOREIGN KEY (book_id) REFERENCES catalogues(id)
);

INSERT INTO circulations (id, book_id, member_id, action, date, due_date, return_date, borrowed_book_id) VALUES
('BB001', 'LC001',  'LM001', 'Borrowed', '2024-01-10', '2024-01-20', NULL, NULL),
('BB002', 'LC002', 'LM002', 'Borrowed', '2024-01-15', '2024-01-25', NULL, NULL),
('BR001', 'LC001',  'LM001', 'Returned', '2024-01-20', NULL, '2024-01-20', 'BB001');
select * from circulations;
desc circulations;

SHOW TABLES;
use lms1;

create DATABASE lms1;
desc REGISTRATION;