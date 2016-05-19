var main=function(){
	 $('a').click(function() {
	 	$('a').css("color","white");
	 	$(this).css("color","red");
   	
   	});
   	$("form").submit(function(){
   		var firstName=$("#FirstName").val();
   		var lastName=$("#LastName").val();
   		var email=$("#Email").val();
   		var message=$("#Message").val();
   		if(firstName ===""){
   			 $(".first_name_error").text("Please enter your first name.");
   		}
   	})
   	
}


$(document).ready(main);
