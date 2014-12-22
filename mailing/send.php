<?php

include 'mails.php';
$sended = @file('sended.txt');
$sended = is_array($sended) ? array_unique($sended) : [];
//change this to your email.
$from = "admin@forexatlas.com";
$subject = "Торговый робот от бога";

//begin of HTML message
$message = file_get_contents('mail.html');
//end of message
$headers  = "From: $from\r\n";
$headers .= "Content-type: text/html\r\n";
foreach ($mails as $mail => $name) {
	if (in_array($mail . PHP_EOL, $sended)) {
		continue;
	}
	$msg = str_replace('[user:lfm]', $name, $message);
	//now lets send the email.
	mail($mail, $subject, $msg, $headers);
	file_put_contents('sended.txt', $mail . PHP_EOL, FILE_APPEND | LOCK_EX);
}
