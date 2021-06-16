$(document).ready(function() {
	
	ajaxGet();
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "https://jsonplaceholder.typicode.com/users",
			success: function(result){
				$.each(result, function(i, user){
					
					var userRow = '<tr>' +
										'<td>' + user.id + '</td>' +
										'<td>' + user.name.toUpperCase() + '</td>' +
										'<td>' + user.username + '</td>' +
										'<td>' + user.email + '</td>' +
										'<td>' + user.address.street + '</td>' +
										'<td>' + user.address.city + '</td>' +
										'<td>' + user.company.name + '</td>' +
										'<td>' + user.website + '</td>' +
									  '</tr>';
					
					$('#userTable tbody').append(userRow);
					
		        });
				
				$( "#userTable tbody tr:odd" ).addClass("bg-primary");
				$( "#userTable tbody tr:even" ).addClass("bg-info");
			},
			error : function(e) {
				alert("ERROR: ", e);
				console.log("ERROR: ", e);
			}
		});	
	}
})