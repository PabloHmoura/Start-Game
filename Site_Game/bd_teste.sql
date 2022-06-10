CREATE database usuarios;

create table usuarios(
ID Int UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
apelido varchar(30),
login Varchar(30),
senha Varchar(40),
Primary Key (ID)) ENGINE = MyISAM;

select * from usuarios;


