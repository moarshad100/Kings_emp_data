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
	"view all department ",	
	"add a department",	
]

const roles = 
["Art coordinator",
	"Game Programmer",
	"Concept Artist",
	"Engine designer",
	"3d artist",
	"Level Designer",
	"Legal Advisor"
]


db.connect((err)=>{
	if(err){
		console.log("error connecting");
	}
	else{
		console.log("connect to the database");
		userPrompt();
	}

});



let userPrompt = function(){

	inquirer.prompt([
	{
	type:'list',
	message:"what would you like to do ",
	name:'ques_list',
	choices:[questions[0],questions[1],questions[2],questions[3],questions[4],questions[5],questions[6]]
	}
	])

	.then((responses)=>{
		if(responses.ques_list == questions[0]){
			viewAllEmployees();			
		}
		else if(responses.ques_list == questions[1]){
			addEmployee();
			
		}
		else if(responses.ques_list == questions[2]){
			updateEmployee();
		}
		else if(responses.ques_list == questions[3]){
			viewAllRoles();
			
		}
		else if(responses.ques_list == questions[4]){
			addRole();
		}
		else if(responses.ques_list == questions[5]){
			viewAllDepartment();
			
		}
		else if(responses.ques_list == questions[6]){
			addDepartment();
			
		}

		
	})
	
}


let viewAllEmployees = function(){
	const sql = `select * from employee`;
	db.query(sql, function(err, tables){ 
			console.table(tables);
			userPrompt();
	});
}

let viewAllDepartment = function(){
	const sql = `select * from department`;
	 db.query(sql, function(err, tables){ 
			console.table(tables);
			userPrompt();
	});
}
let viewAllRoles = function(){
	const sql = `select * from role`;
	 db.query(sql, function(err, tables){ 
			console.table(tables);
			userPrompt();
	});
}

let addDepartment = function(){
	
	inquirer.prompt([
	{
		type:'input',
		message:"what is the name of the department ",
		name:'dept_name'
	}
	])
	.then((answer)=>{
		let sql = `INSERT INTO DEPARTMENT(name) VALUES (?)`;

		db.query(sql,[answer.dept_name],(err, tables)=>{ 
		if(err){throw err;}
		console.log("data added");
		 userPrompt();
			
	})});
}


let addEmployee = function(){
	
	inquirer.prompt([
	{
		type:'input',
		message:"what is the first name",
		name:'first_name'
	},


	{
		type:'input',
		message:"what is the last name ",
		name:'last_name'
	},

	{
	type:'input',
	message:"what is the role of this employee? ",
	name:'roles_list',
	},
	{
	type:'input',
	message:"what is the managers id ",
	name:'manager_id',
	
	}
	])
	.then((answer)=>{
		
		let sql = `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES (?)`;
		db.query(sql,[[answer.first_name,answer.last_name,answer.roles_list,answer.manager_id]],(err, tables)=>{ 
		if(err){throw err;}
		console.log("data added");		
		})
		db.query('select * from employee inner join  role on employee.role_id = role.id',(err, tables)=>{ 
		if(err){throw err;}
		console.table(tables);
		userPrompt();
		})

	});
		
}

let updateEmployee = function(){
	db.query('select * from employee',(err, tables)=>{ 
		if(err){throw err;}
		const employees = [];

		tables.forEach(({first_name,last_name,id})=>
			employees.push({
				name: first_name + " " + last_name,
				value:id

			}));
		console.log(employees.id)

		inquirer.prompt([
		{
			type:"list",
			name:"employees_list",
			message:"who do you want make changes to?",
			choices:employees
		},
		{
			type:"input",
			name:"role_id",
			message : "what is the role"
		}
		])
		.then((answer)=>{
		let sql = `UPDATE employee SET role_id = ? WHERE id = ?;`
		db.query(sql,[[answer.role_id],[answer.employees_list]],(err, tables)=>{ 
		if(err){throw err;}
		db.query("select * from employee",(err,tables)=>{
			console.table(tables);
			userPrompt();
		})

	})
	})})
}





let addRole = function(){
	inquirer.prompt([
	{
		type:'input',
		message:"Role Title",
		name:'role_title'
	},
	{
		type:'input',
		message:"Enter the department id",
		name:'department_id'
	},
	{
		type:'input',
		message:"enter the Salary",
		name:'Salary'
	}
	])
	.then((answer)=>{
		let sql = `INSERT INTO role(title,department_id,salary) VALUES (?)`;
		db.query(sql,[[answer.role_title,answer.department_id,answer.Salary]],(err, tables)=>{ 
		if(err){throw err;}
		
		userPrompt();
	})})

}

