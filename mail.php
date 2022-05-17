<?php
$from    = isset($_POST['visitor_email']) ? $_POST['visitor_email'] : 'nobody@example.com';
$to      = 'nobody@example.com';
$subject = 'Message from ' . isset($_POST['visitor_name']) ? $_POST['visitor_name'] : $to . 'on Roar Bikes';
$message = isset($_POST['visitor_message']) ? $_POST['visitor_message'] : 'No message';
$message = wordwrap($message, 70, "\r\n");
$headers = array(
    'From' => $from,
    'Reply-To' => $from,
    'X-Mailer' => 'PHP/' . phpversion()
);
mail($to, $subject, $message, $headers) or die('Failed to send');
echo 'Email sent!';
?>