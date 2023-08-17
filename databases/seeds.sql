INSERT INTO DEPARTMENT(name)
VALUES ('Art'),
		('Programming'),
		('Management'),
		('Legal');
-- ("Arshad Mohammed"),("Shakil Rahman"),('John Mckinnon'),("Ayesha Jialani"),("Shamshuddin Jamal");


INSERT INTO role(title,department_id,salary)
VALUES ("Art coordinator",1,60000),
	("Game Programmer",2,75000),
	("Concept Artist",1,60000),
	("Engine designer",2,100000),
	("3d artist",1,90000),
	("Level Designer",2,60000),
	("Legal Advisor",4,90000);



INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("Mohammed","Arshad",1,NULL),
	("Shakil","Rahman",7,1),
	("John","Mckinnon",4,2),
	("Ayesha","Jialani",5,NULL),
	("Shamshuddin","Jamal",6,4);
