<?php
$connect=mysqli_connect("127.0.0.1","root","","forum");
$answerRowData =  file_get_contents("php://input"); 
$answers = preg_split("&", $answerRowData);
$questions = mysqli_query($connect,"select * from Question where questionID in (select questionId from QuestionSheet where QuestionSheetId=1) order by questionId;");
$patient = mysqli_query($connect,"select LAST_INSERT_ID() from Patient;");
print_r($patient);
/*
foreach($answers as $answer){
    $questionAndAnswer = preg_split("=", $answer);
    $question = $questionAndAnswer[0];
    $questionLen = strlen("Question");
    $questionId = substr($question, $questionLen, strlen($question)-$questionLen);
    $answer = $questionAndAnswer[1];
}
 */
mysqli_close($connect);
?>
