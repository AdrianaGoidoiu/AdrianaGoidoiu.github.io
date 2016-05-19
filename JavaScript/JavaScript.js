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
   		if(firstName === "Adriana"){
   			 $(".form-control").text("Please enter your first name.");
   		}
   		if(lastName === "") {
      			$(".last_name_error").text("Please enter your last name.");      
    		}
    		if(email === "") {
      			$(".email_error").text("Please enter your email address.");   
    		}
    		if(message === ""){
    			$(".message_error").text(firstName);
    		}
    		return false;
   	});
   	
}


$(document).ready(main);
