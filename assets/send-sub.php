<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require '../phpmailer/vendor/autoload.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // robot detection
  $honeypot = trim($_POST["phone"]);

  if(!empty($honeypot)) {
    echo "BAD ROBOT!";
    exit;
  }

$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$gdpr = filter_var($_POST['gdpr'], FILTER_SANITIZE_STRING);



// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.switchplus-mail.ch';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'awake@draco.mom';                     // SMTP username
    $mail->Password   = 'kZr57VPULDdmGT9';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Sender
    $mail->setFrom('awake@draco.mom', 'Draco Mom');


    //Recipients
    $mail->addAddress($email, $name);     // Add a recipient
    $mail->addBcc('awake@draco.mom');     // Add a recipient


    $body = "Welcome " . $name . "<br>Thank you for subscribing to Draco Mom. A sincere 'thank you' for your interest
in my work; it means a lot to me.<br><br>Once a week, I will be sharing with you the content I hope will provide some
value to you: my blog posts, up-to-date findings in psychology with practical tips on how to use and benefit from them,
as well as special deals and upcoming events.
<br><br>Feel free to message me at any time with questions, thoughts, reflections,
comments at lucyna@draco.mom. I love hearing from you! <br><br>
Lucyna Milanowska-Sigrist<br>
Rapid Transformational Therapist" ;

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Subscribtion";

    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    echo 'Thank you for subscribing.';
} catch (Exception $e) {
  echo "Message could not be sent. Contact System Administrator";
}
}
