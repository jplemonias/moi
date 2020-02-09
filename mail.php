<?php 

$Expediteur = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];

$msg = "Expéditeur: \t$Expediteur\n<br>";
$msg .= "E-Mail:\t$email\n<br>";
$msg .= "Message:\t$message\n\n";

$destinataire = "jeanpaullemonias@gmail.com";
$sujet = "Formulaire depuis 'Psycho@ctif'";

$mailheaders = "From: Mon test de formulaire<> \n";
$mailheaders .= "Reply-To: $email\n\n";

mail($destinataire, $sujet, $msg, $mailheaders);

echo "<HTML><HEAD>";
echo "<TITLE>Formulaire envoyé !</TITLE></HEAD><BODY>";
echo "<H1 align=center>Merci, $Expediteur.</H1>";
echo "<P align=center>";
echo "Ton message à bien été transmit à: $destinataire";
echo "<br><br>/!\ ça n'est pas vrai pour l'envoie /!\ ";
echo "<br>En cours de codage<br><br>";
echo "<br><br>Mais si fonctionnel, l’envoi serait ainsi:<br><br>$sujet<br><br>$msg</P>";
echo "</BODY></HTML>";

?>