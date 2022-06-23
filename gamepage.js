var player1Score = 0
var player2Score = 0
var player1Name = localStorage.getItem("player1Name")
var player2Name =localStorage. getItem("player2Name")
var word;
var questionTurn="player1"
var answerTurn="player2"
document.getElementById("player1Name").innerHTML = player1Name + "-";
document.getElementById("player2Name").innerHTML = player2Name + "-";
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("playerQuestion").innerHTML = "Question Turn-"+player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn-"+player2Name;
function send(){
    var getWord = document.getElementById("word").value
     word = getWord.toLowerCase()
     char1 = word.charAt(1)
     halfLength = Math.floor(word.length/2)
     char2 = word.charAt(halfLength)
     char3 = word.charAt(word.length - 1)
    removeChar1 = word.replace(char1,"_")
    removeChar2 = removeChar1.replace(char2,"_")
    removeChar3 = removeChar2.replace(char3,"_")
    console.log(removeChar3)
    var questionWord = "<h4 id='wordDisplay'>"+removeChar3+"</h4>"
    var inputBox = "<input type='text' id='answer'></input> <br> <br>"
    var checkButton = "<button onclick = 'check()' class='btn btn-info'>Check Answer</button>"
    var output =  questionWord+inputBox+checkButton
    document.getElementById("output").innerHTML = output
document.getElementById("word").value = "";
}
function check(){
var getAnswer = document.getElementById("answer").value;
var answer = getAnswer.toLowerCase()
if(word == answer){
    if(questionTurn == "player1"){
        player1Score = player1Score + 1
        document.getElementById("player1Score").innerHTML = player1Score;
    }
    else{
        player2Score = player2Score + 1
        document.getElementById("player2Score").innerHTML = player2Score;
    }
}
if(questionTurn == "player1"){
  questionTurn = "player2"
  answerTurn = "player1"
  document.getElementById("playerQuestion").innerHTML = "Question Turn-"+player2Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn-"+player1Name;
}
else{
    questionTurn = "player1"
    answerTurn = "player2"
}
document.getElementById("output").innerHTML = "";
}
