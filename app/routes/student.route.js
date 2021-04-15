module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
    const students = require('../controllers/student.controller.js');
	
	var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	

	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});

	app.get('/publico', (req,res) => {
		res.sendFile(path + "pruebapublico.html");
	});
 
    // Retrieve all Customers
    app.get('/api/students/all', students.getAll);
	
	app.use("/",router);
 

}