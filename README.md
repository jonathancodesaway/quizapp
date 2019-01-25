# quizapp
CUNYTTP - Bootcamp Capstone

to run

In Frontend:
	
	(may need to remove node_modules and run npm install first)
	
	npm start

In Backend:
	
	rails server -p 3001 --binding=0.0.0.0

	
to setup backend use
	
	bundle install

to setup database:


	install postgres

	log in and run following commands:

	create user quizapp;

	alter role quizapp with password 'test';

	alter role quizapp superuser;

	alter role quizapp login;

	create database quizapp;

	log out.


	cd into dbstuff

	ruby db.rb
