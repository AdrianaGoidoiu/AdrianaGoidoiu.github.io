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
   		if(firstName === ""){
   			 $(".first_name_error").text("Please enter your first name.");
   		}
   		if(lastName === "") {
      			$(".last_name_error").text("Please enter your last name.");      
    		}
    		if(email === "") {
      			$(".email_error").text("Please enter your email address.");   
    		}
    		if(message === ""){
    			$(".message_error").text("Please enter your message.");
    		}
    		return false;
   	});
   	
}


$(document).ready(main);
