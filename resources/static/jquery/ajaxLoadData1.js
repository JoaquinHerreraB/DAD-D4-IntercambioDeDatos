$(document).ready(function() {
	
	ajaxGet();
	
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "api/students/all",
			success: function(result){
				$.each(result, function(i, student){
					
					var studentRow = '<tr>' +
										'<td>' + student.id + '</td>' +
										'<td>' + student.codigo  + '</td>' +
										'<td>' + student.apel +','+student.nomb  + '</td>' +
										'<td>' + student.facultad.nombre + '</td>' +
										'<td>' + student.nota + '</td>' +
									  '</tr>';
					
					$('#studentTable tbody').append(studentRow);
					
		        });
				
				$( "#studentTable tbody tr:odd" ).addClass("warning");
				$( "#studentTable tbody tr:even" ).addClass("danger");
			},
			error : function(e) {
				alert("ERROR: ", e);
				console.log("ERROR: ", e);
			}
		});	
	}
})