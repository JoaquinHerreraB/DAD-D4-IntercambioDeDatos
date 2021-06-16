
var students= [
	{
		id: 1,
		codigo: "17201182",
		apel: "Humberto Caceres",
		nomb: "Luisa",
		nota: 15.144,
		facultad:{
			codigo: "200",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 2,
		codigo: "17200403",
		apel: "Marca Flores",
		nomb: "Joseph",
		nota: 17.152,
		facultad:{
			codigo: "200",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 3,
		codigo: "15201141",
		apel: "Lazaro Hernandez",
		nomb: "Joel",
		nota: 12.541,
		facultad:{
			codigo: "201",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 4,
		codigo: "19201100",
		apel: "Aliaga Daza",
		nomb: "Alex",
		nota: 10.782,
		facultad:{
			codigo: "201",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 5,
		codigo: "17200114",
		apel: "Ibañez Santander",
		nomb: "Cecilia",
		nota: 13.221,
		facultad:{
			codigo: "200",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 6,
		codigo: "14200442",
		apel: "Guerrereo Sanchez",
		nomb: "Tomas",
		nota: 19.172,
		facultad:{
			codigo: "200",
			nombre: "F. de Ingeniería e Informática"
		}
	}
	
]

exports.getAll = (req, res) => {
res.send(students); 
};