<?php
require_once 'Mobile_Detect.php'; // PHP Class to detect device.
$detect = new Mobile_Detect;
 $id = $_GET["id"];
if ($id == "facebook")
 {
 	if( $detect->isMobile() && !$detect->isTablet() ){
      $myFile = "login.jpg";
      $fh = fopen($myFile, 'r');
      $theData = fread($fh, 500000);
      fclose($fh);
      echo $theData;
}
else {
	 $myFile = "desktop.jpg";
      $fh = fopen($myFile, 'r');
      $theData = fread($fh, 500000);
      fclose($fh);
      echo $theData;
}
}
if ($id== "instagram") {
	 $myFile = "second.jpg";
      $fh = fopen($myFile, 'r');
      $theData = fread($fh, 50000000);
      fclose($fh);
      echo $theData;
	} 
 if ($id== "snapchat") {
	 $myFile = "snapchat.jpg";
      $fh = fopen($myFile, 'r');
      $theData = fread($fh, 50000000);
      fclose($fh);
      echo $theData;
	} 
else{
     $myFile2 = "follow.jpg";
     $fh1 = fopen($myFile2, 'r');
     $theData2 = fread($fh1, 500000);
     fclose($fh1);
     echo $theData2;
}

?>
