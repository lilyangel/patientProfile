var user;
var optionId;
var questionId;
var getQuestionSheetHttpresq;
var saveAnswerSheetHttpresq;
var getPatientSheetHttpresq;
function getNextQuestionSheet(optionID,questionID){
    optionId = optionID;
    questionId = questionID;
    var httpLink = 'http://192.168.16.133/profile/nextQuestionSheet.php?optionId='+optionId;
    getQuestionSheetHttpresq = new XMLHttpRequest();
    getQuestionSheetHttpresq.open( "GET", httpLink, false );
    getQuestionSheetHttpresq.onreadystatechange = handler;
    getQuestionSheetHttpresq.send();
}

function handler(evtXHR)
{
    if (getQuestionSheetHttpresq.readyState == 4)
    {
        if (getQuestionSheetHttpresq.status == 200)
        {
            var questionSheetDivId = "nextQuestionSheet"+questionId;
            var questionSheetDiv = document.getElementById(questionSheetDivId);
            questionSheetDiv.innerHTML = getQuestionSheetHttpresq.responseText;
        }
    }
}

function saveAnswerSheet(usr){
    user = usr;
   var options = document.getElementsByClassName('option');
   var answerSheetParam = '';
   for(var i = 0; i < options.length; i++){
      var option = options[i];
      if((option.type=='radio')&&(option.checked==true)){
        answerSheetParam += option.name + '=' + option.value + '&';
      }
   }
    var httpLink = 'http://192.168.16.133/profile/saveAnswerSheet.php';
    saveAnswerSheetHttpresq = new XMLHttpRequest();
    saveAnswerSheetHttpresq.open( "post", httpLink, false );
    saveAnswerSheetHttpresq.onreadystatechange = posthandler;
    saveAnswerSheetHttpresq.send(answerSheetParam);
}

function posthandler(evtXHR){
    if (saveAnswerSheetHttpresq.readyState == 4)
    {
        if (saveAnswerSheetHttpresq.status == 200)
        {
            var httpLink = 'http://192.168.16.133/profile/getPatientSheet.php'
            getPatientSheetHttpresq = new XMLHttpRequest();
            getPatientSheetHttpresq.open( "post", httpLink, false );
            getPatientSheetHttpresq.onreadystatechange = getpatienthandler;
            getPatientSheetHttpresq.send(user);
        }
    }
}

function getpatienthandler(evtXHR){
    if(getPatientSheetHttpresq.readyState == 4){
        if(getPatientSheetHttpresq.status == 200) {
        }
    }
}
