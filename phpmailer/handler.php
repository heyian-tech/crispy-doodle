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
$validator->fields(['Name','Email'])->areRequired()->maxLength(50);
$validator->fields(['Subject'])->maxLength(50);
$validator->field('Email')->isEmail();
$validator->field('Message')->maxLength(6000);




$pp->sendEmailTo('admin@heyian.tech'); // ← Your email here

$pp->setEmailHeader('X-Permitted-Cross-Domain-Policies', 'none');
$pp->setEmailHeader('X-Content-Type-Options', 'nosniff');
$pp->setEmailHeader('X-Frame-Options', 'DENY');
$pp->setEmailHeader('X-XSS-Protection', '1; mode=block');
$pp->setEmailHeader('X-Download-Options', 'noopen');
echo $pp->process($_POST);