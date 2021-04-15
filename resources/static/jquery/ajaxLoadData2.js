$(document).ready(function() {
	
	ajaxGet2();
	
	// DO GET
	function ajaxGet2(){
		$.ajax({
			type : "GET",
			url : "https://jsonplaceholder.typicode.com/users",
			success: function(result){
				$.each(result, function(i, customer){
					
					var customerRow = '<tr>' +
										'<td>' + customer.id + '</td>' +
										'<td>' + customer.name.toUpperCase() + '</td>' +
										'<td>' + customer.username + '</td>' +
										'<td>' + customer.address.street + '</td>' +
										'<td>' + customer.address.city + '</td>' +
									  '</tr>';
					
					$('#customerTable tbody').append(customerRow);
					
		        });
				
				$( "#customerTable tbody tr:odd" ).addClass("info");
				$( "#customerTable tbody tr:even" ).addClass("success");
			},
			error : function(e) {
				alert("ERROR: ", e);
				console.log("ERROR: ", e);
			}
		});	
	}
})