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


$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
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

    $body = "Hi " . $name . "<br><br>Thank you for reaching out to me. I will get back to you shortly. <br><br>Kind regards,<br>Lucyna Milanowska<br><br>
    Your message below:<br><br>Name: " . $name . "<br>Email: " . $email . "<br>GDPR: " . $gdpr . "<br>Message: " . $message .
    "<br><br><br><br><br>--------------" ;

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;

    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();

    echo 'Thank you for your message.<br> We will get back in touch with you shortly.';
} catch (Exception $e) {
    echo "Message could not be sent. Contact System Administrator";
}
}
