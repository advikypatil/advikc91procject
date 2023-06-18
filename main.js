player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player1_score = 0;


document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";


document.getElementById("player1_score").innerHTML = player1_name ;
document.getElementById("player2_score").innerHTML = player2_name ;


document.getElementById("player_question").innerHTML = "Question Turn -"+player1_name  ;
document.getElementById("player_answer").innerHTML = "answer Turn -"+player2_name  ;


function send() {
    get_word = document.getElementById("word").value;

    word = get_word.tolowercase();
    console.log("word in lowercase = " + word);

    charAt1 = word.charAt(1);

    console.log(charAt1);
    charAt2 = word.charAt(3);

    console.log(charAt2);
    charAt3 = word.charAt(4);

    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");

    remove_charAt2 = remove_charAt1.replace(charAt2, "_");

    remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    console.log(remove_charAt3);

    Question_word = "<h4 id='word_display'> Q ."+remove_charAt3+"</h4>"
    input_box = "<br>answer :<input type = 'text id' id='input_check_box'> ";
    check_button = "<br><br><button class=btn btn-succes"

}