module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
    const customers = require('../controllers/customer.controller.js');
	
	var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	

	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});

	app.get('/2', (req,res) => {
		res.sendFile(path + "pruebapublico.html");
	});
 
    // Retrieve all Customers
    app.get('/api/customers/all', customers.getAll);
	
	app.use("/",router);
 

}