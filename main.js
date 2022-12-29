function addUser(){
    p1 = document.getElementById("p1_user").value;
    p2 = document.getElementById("p2_user").value;
    localStorage.setItem("player1", p1);
    localStorage.setItem("player2", p2);
    window.location = "quiz_game_page.html";
}