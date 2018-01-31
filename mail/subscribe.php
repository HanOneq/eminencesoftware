<?php

$email = $_POST['email'];

// create email body and send it	
$to = 'admin@eminencesoftware.com';
$email_subject = "Website Subscription Form";
$email_body = "You've received a new message request to subscribe to your website.\n\n"."Here are the details:\n\nEmail: $email\n\nWould like to be added to the subscription list.";
$headers = "From: admin@eminencesoftware.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;

?>
