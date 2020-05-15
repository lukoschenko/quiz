<?php
error_reporting(0);

$area    = join(', ', $_POST['area']);
$Rom     = join(', ', $_POST['Rom']);
$house   = join(', ', $_POST['house']);
$repairs = join(', ', $_POST['repairs']);
$budget  = join(', ', $_POST['budget']);
$ways    = join(', ', $_POST['ways']);
$tel     = $_POST['tel'];

$to = "k8.best@yandex.ru";
$subject = "ЗАЯВКА!";
$message = '
	Пользователь оставил свои данные <br>
 <b>Район:</b> ' . $area . ' <br>
 <b>Количество комнат:</b> ' . $Rom . ' <br>
 <b>Площадь:</b> ' . $house . ' <br>
 <b>Ремонт:</b> ' . $repairs . ' <br>
 <b>Бюджет:</b> ' . $budget . ' <br>
 <b>Способ оплаты:</b> ' . $ways . ' <br>
	<b>Телефон:</b> ' .  $tel . '';
$headers = "From: leads@refinans-expert.ru" . "\r\n" .
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
mail($to,$subject,$message,$headers);

?>