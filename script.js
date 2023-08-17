const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require(".db/connect.js")

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

console.log(db.)






// let userPrompt = function(){

// 	inquirer.prompt([
// 		{
// 	type:'list',
// 	message:"what would you like to do ",
// 	name:'ques_list',
// 	choices:[questions[0],questions[1],questions[2],questions[3],questions[4],questions[5],questions[6]]
// 	}])
// 	.then((response)=>{
// 		if((response.ques_list)==questions[0]){
// 			inquirer.prompt([
// 		{
// 		type:'list',
// 		message:"what would you like to do ",
// 		name:'color',
// 		choices:["green","red","blue","yellow"]
// 	}])

// 		}
// 	});
// }


// userPrompt();
