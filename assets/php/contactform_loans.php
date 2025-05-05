<?php

 // ++++++++++++++++++++++++++++++++++++
error_reporting(0);

  
 // configuration
 
$email_it_to = "your_own_email_address@some_domain.com";

$error_message = "Please complete the form first";

$rnd=$_POST['rnd'];
$name=$_POST['name'];
$name_s=$_POST['name_s'];
$subject=$_POST['subject'];

  
if(!isset($rnd) || !isset($name) || !isset($email) || !isset($subject) ) {
	echo $error_message;
    die();
}


$subject = stripslashes($subject);
$email_from = $email;

$email_message = "Message submitted by ".stripslashes($name)." ".stripslashes($name_s).", phone nr:".stripslashes($subject);
$email_message .=" on ".date("d/m/Y")."\n\n";
$email_message .="\n\n";

// Always set content-type when sending HTML email


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8". "\r\n";
$headers .= 'From: '.stripslashes($name);

//$headers .= 'From: <'.$email_from.'>' . "\r\n";

mail($email_it_to,$subject,$email_message,$headers);



?>