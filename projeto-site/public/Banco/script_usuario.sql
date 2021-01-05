Create database Dishonored_wiki;
use Dishonored_wiki;

create table Usuario(
Id_C int primary key auto_increment,
NomeUser varchar (30),
Email varchar(70),
Senha varchar(15),
DataNasc date
) auto_increment = 105;

insert into usuario values 
(null, 'Well', 'Well.dis.sss@kfkkdk.com','jfjfjfj','2001-06-28');


