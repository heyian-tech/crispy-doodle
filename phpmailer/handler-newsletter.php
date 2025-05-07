<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->field('email')->isEmail();





$pp->sendEmailTo('support@heyian.tech'); // ← Your email here

$pp->setSuccessMessage('Thank you for subscribing to our newsletter!');
$pp->setErrorMessage('There was an error processing your request. Please try again later.');
$pp->setEmailHeader('From', 'no-reply@heyian.tech');    // Replace with your desired "From" email address   
$pp->setEmailHeader('Reply-To', 'support@heyian.tech'); // Replace with your desired "Reply-To" email address
$pp->setEmailHeader('X-Mailer', 'PHP/' . phpversion()); // Optional: Set the X-Mailer header
$pp->setEmailHeader('Cc', 'cc@example.com'); // Optional: Set the Cc header
$pp->setEmailHeader('Bcc', 'bcc@example.com');
$pp->setEmailHeader('X-Priority', '1');
$pp->setEmailHeader('X-Confirm-Reading-To', 'support@heyian.tech');
$pp->setEmailHeader('X-Mailer', 'PHP/' . phpversion());
$pp->setEmailHeader('X-Content-Type-Options', 'nosniff');
$pp->setEmailHeader('X-Frame-Options', 'DENY');
$pp->setEmailHeader('X-XSS-Protection', '1; mode=block');
$pp->setEmailHeader('X-Content-Security-Policy', "default-src 'self';");
$pp->setEmailHeader('X-Download-Options', 'noopen');
$pp->setEmailHeader('X-Permitted-Cross-Domain-Policies', 'none');
echo $pp->process($_POST);