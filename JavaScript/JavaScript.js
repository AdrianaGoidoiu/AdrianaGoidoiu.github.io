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
   		if(firstName === ""){
    			$(".message_error").text("Please enter your message here.");
    		}
   		if(lastName === ""){
    			$(".message_error").text("Please enter your message here.");
    		}
    		if(email === ""){
    			$(".message_error").text("Please enter your message here.");
    		}
    		if(message === ""){
    			$(".message_error").text("Please enter your message here.");
    		}
    		return false;
   	});
   	
}


$(document).ready(main);
