<?php
$myEmail="goidoiuadriana@gmail.com";
$emailSubject="Message from my webPage";
$firstName=$_POST['firstName'];
$lastName=$_POST['lastName'];
$emailFrom=$_POST['email'];
$message=$_POST['message'];

$body = <<<EOD
<br> <hr> <br>
From: $emailFrom <br>
First Name: $firstName <br>
Last Name: $lastName <br>
Message: $message <br>
EOD;

$headers="From $email \r \n";
$headers .="Content-type: text/html\r\n";
$success=mail($myEmail, $emailSubject, $body, $headers);
$theResult = <<<EOD
<html>
<head></head>
<body>
<h1>AI REUSIT!</h1>
</body>
</html>
EOD;
echo "$theResults";
?>
