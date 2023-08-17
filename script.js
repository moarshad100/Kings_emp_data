const inquirer = require("inquirer");
const mysql = require("mysql2");
const {db} = require("./db/connect.js")


const questions = 
[
	"view all employees",
	"add an employee",
	"update an employee role",
	"view all roles",
	"add a role",
	"view all department ?",	
	"add a department",	
	]
let userPrompt = function(){

	inquirer.prompt([
		{
	type:'list',
	message:"what would you like to do ",
	name:'ques_list',
	choices:[questions[0],questions[1],questions[2],questions[3],questions[4],questions[5],questions[6]]
	}])
	.then((response)=>{
	if(response == questions[0]){
		// db.query(	
  		// 	'SELECT * FROM employee',
  		// 	function(err, results, fields) {
    	// 	console.log(results[0].name); // results contains rows returned by server
    	// 	console.log(fields); // fields contains extra meta data about results, if available
  		// });
  		console.log("hel");
	}

	});
}




userPrompt();
