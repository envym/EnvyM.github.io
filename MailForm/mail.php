<?php
$recepient = "mail@mail.com";
$sitename = "Название сайта";

$text = trim($_POST["text"]);
$mail = trim($_POST["mail"]);
$message = "E-mail: $mail \nТекст: $text";

$pagetitle = "Новое сообщение с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");