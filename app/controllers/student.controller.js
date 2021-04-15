
var students= [
	{
		id: 1,
		codigo: "15200182",
		apel: "Flores Zamora",
		nomb: "Miguel",
		nota: 13.221,
		facultad:{
			codigo: "200",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 2,
		codigo: "10200203",
		apel: "Garcia Perez",
		nomb: "Alejandro",
		nota: 14.129,
		facultad:{
			codigo: "200",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 3,
		codigo: "11201194",
		apel: "Mendoza Li",
		nomb: "Ariana",
		nota: 15.911,
		facultad:{
			codigo: "201",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 4,
		codigo: "17201981",
		apel: "Aliaga Marca",
		nomb: "Cesar",
		nota: 10.782,
		facultad:{
			codigo: "201",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 5,
		codigo: "14200164",
		apel: "Vaca Guevara",
		nomb: "Francisco",
		nota: 13.221,
		facultad:{
			codigo: "200",
			nombre: "F. de Ingeniería e Informática"
		}
	},
	{
		id: 6,
		codigo: "19200012",
		apel: "Guerror Sanchez",
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