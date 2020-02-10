<?php 

$Expediteur = $_POST['Name']; //==> on réccuper le nom
$email = $_POST['Email']; //======> on réccuper l'email
$message = $_POST['Message']; //==> on réccuper le message

// on édite le message que contiendras l'email
$msg = "Vous avez reçu un message de:\t$Expediteur.\n";
$msg .= "Le voici:\n";
$msg .= "\"$message\".\n";
$msg .= "Pour lui répondre:\n";
$msg .= "$email\n\n";

$destinataire = "jeanpaullemonias@gmail.com"; //==> on cré l'email de resseption
$sujet = "message depuis PsychoActif"; //======> on cré le sujet du mail

$mailheaders = "From: $email $sujet de $Expediteur \n";
$mailheaders .= "Reply-To: $email\n\n";

mail($destinataire, $sujet, $msg, $mailheaders);

echo "<HTML><HEAD>";
echo "<TITLE>Formulaire envoyé !</TITLE></HEAD><BODY>";
echo "<H1 align=center>Merci, $Expediteur.</H1>";
echo "<P align=center>";
echo "Ton message à bien été transmit à: $destinataire";
echo "<br><br>Il a reçu ceci:<br><br>$sujet<br><br>$msg</P>";
echo "</BODY></HTML>";

?>