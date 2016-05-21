var main=function(){
	 $('a').click(function() {
	 	$('a').css("color","white");
	 	$(this).css("color","red");
   	});

   	$("form").submit(function(){
                var values = $(this).serialize();
   		var firstName=$("#firstName").val();
   		var lastName=$("#lastName").val();
   		var email=$("#email").val();
   		var message=$("#message").val();
                $('#firstName, #lastName, #email, #message').keypress(function(key){
                   if(key.which){
                         $(this).css("border-color","#ccc"); }
                    });

   		if(firstName == ""){
    			document.getElementsByName('firstName')[0].placeholder="I would like to know your first name";
                        $("#firstName").addClass('error');
                }
   		if(lastName == ""){
    			document.getElementsByName('lastName')[0].placeholder="I would like to know your last name";
                        $("#lastName").addClass('error');
    		}
    		if(email == ""){
    			document.getElementsByName('email')[0].placeholder="Please enter your email address";
                        $("#email").addClass('error');
    		}
    		if(message == ""){
    			document.getElementsByName('message')[0].placeholder="There is no point to send me an email without a message";
                        $("#message").addClass('error');
  
  		}
                if(firstName!="" && lastName!="" && email!="" && message!=""){
       $.ajax({
        url: "../PHP/script.php",
        type: "post",
        data: values ,
        success: function (response) {
           $('input, textarea').val("");      
           $(':input').removeAttr('placeholder');        

        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }


    });
                }
    		return false;            
   	});
   	}
$(document).ready(main);
						