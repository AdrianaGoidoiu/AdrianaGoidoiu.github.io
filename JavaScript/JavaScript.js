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
    			$(".first_name_error").text("I would like to know your first name");
    		}
   		if(lastName == ""){
    			$(".last_name_error").text("I would like to know your last name");
    		}
    		if(email == ""){
    			$(".email_error").text("Please enter your email address");
    		}
    		if(message === ""){
    			$(".message_error").text("There is no point to send me an email without a message");
    		}
    		return false;
   	});
   	
}


$(document).ready(main);
