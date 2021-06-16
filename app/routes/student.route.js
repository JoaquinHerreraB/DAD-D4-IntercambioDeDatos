module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
    const students = require('../controllers/student.controller.js'); //Obtiene data de Estudiantes - No BD
	//const urlencodedParser = bodyParser.urlencoded({extended: false});
	var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	// LLAMADAS  REST
	app.get('/api/students/all', students.getAll);
		
	app.post('/api/students/insert',(req, res) =>{
		
		res.send(`<h1>Los datos fueron insertados</h1>`);
		const data = req.body;
		students.insert(data);
		console.log(req.body);
	});
	// VISTAS 
	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});

	app.get('/publico', (req,res) => {
		res.sendFile(path + "pruebapublico.html");
	});
	app.use("/",router);
    

}