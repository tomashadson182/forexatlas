<?php 
mail('tennalian@gmail.com', 'Обратный звонок c forexatlas.com'.$_SERVER['SERVER_NAME'],  
'Здравствуйте! Меня зовут '.htmlspecialchars($_POST['name']).'. Свяжитесь со мной по номеру  '.htmlspecialchars($_POST['phone']).' Мой e-mail: '.htmlspecialchars($_POST['email']));
die(json_encode(array('result'=>true, 'text'=>'Thank you')));  
?>
