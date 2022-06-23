function login(){
    var player1Name=document.getElementById("player1Name").value
    var player2Name=document.getElementById("player2Name").value
    localStorage.setItem("player1Name",player1Name)
    localStorage.setItem("player2Name",player2Name)
    window.location="gampage.html"
}
