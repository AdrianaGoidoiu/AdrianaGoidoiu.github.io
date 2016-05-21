<?php
$myEmail="goidoiuadriana@gmail.com";
$emailSubject="Message from my webPage";
$firstName=$_POST['firstName'];
$lastName=$_POST['lastName'];
$emailFrom=$_POST['email'];
$message=$_POST['message'];
echo "Buna";

if($firstName!="" && $lastName!="" && $emailFrom!="" && $message!=""){
$body = <<<EOD
From: $firstName $lastName 
Contact: $emailFrom
Message: $message
EOD;
$headers="From:" .$emailFrom;
$success=mail($myEmail, $emailSubject, $body, $headers);
}
?>
