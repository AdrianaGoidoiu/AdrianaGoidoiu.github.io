var main=function(){
	 $('a').click(function() {
	 	$('a').css("color","white");
	 	$(this).css("color","red");
   	
   	});
   	$("form").submit(function(){
   		var firstName=$("#firstName").val();
   		var lastName=$("#lastName").val();
   		var email=$("#email").val();
   		var message=$("#message").val();
   		if(firstName == ""){
    			$(".first_name_error").text("Please enter your first name here.");
    		}
   		if(lastName == ""){
    			$(".last_name_error").text("Please enter your last name here.");
    		}
    		if(email == ""){
    			$(".email_error").text("Please enter your email address.");
    		}
    		if(message === ""){
    			$(".message_error").text("Please enter your message here.");
    		}
    		return false;
   	});
   	
}


$(document).ready(main);
