<?php
$response = array('success' => false, 'message' => 'Data submission error.');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);

    if (!preg_match('/^\+?[0-9]{1,15}$/', $phone)) {
        $response['message'] = 'Invalid phone number format. Please enter numbers only.';
    } else {

        $to = "tcachelena@gmail.com"; // Укажите ваш email
        $subject = "Новое сообщение с сайта";

        $body = "Name: $name\nPhone: $phone\nMessage:\n$message";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
        $headers .= "From: AGD@yourdomain.com" . "\r\n";
        $headers .= "Reply-To: $name <$phone>" . "\r\n";

        if (mail($to, $subject, $body, $headers)) {
            $response['success'] = true;
            $response['message'] = 'Thank you for your message! We will get in touch with you shortly.';
        } else {
            $response['message'] = 'An error occurred while sending the message. Please try again later.';
        }
    }

    // Отправляем JSON-ответ
    echo json_encode($response);
}
?>