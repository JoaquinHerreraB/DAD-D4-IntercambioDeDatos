// Fetch all Customers
var customers = [
	{
		id: 1,
		name: "Miguel",
		age: 22,
		address:{
			street: "Av. Fauccet",
			city: "San Miguel"
		}
	},
	{
		id: 2,
		name: "Giancarlo",
		age: 19,
		address:{
			street: "Av. Colonial",
			city: "San Martín"
		}
	},
	{
		id: 3,
		name: "Anita",
		age: 17,
		address:{
			street: "Calle Minos",
			city: "Cadiz"
		}
	},
	{
		id: 4,
		name: "Cecilia",
		age: 22,
		address:{
			street: "Av. Colonial",
			city: "Callao"
		}
	},
	{
		id: 5,
		name: "Jorge",
		age: 45,
		address: {
			street: "Cale Las Americas",
			city: "Arilo"
		}
	}
]

exports.getAll = (req, res) => {
console.log("--->Get All Customers: \n" + JSON.stringify(customers, null, 4));
res.send(customers); 
};