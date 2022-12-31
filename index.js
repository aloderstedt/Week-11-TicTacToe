//Me being me lol XD
let audio = new Audio('Audio/Win.mp3');

let turn = document.getElementById("turn"),
    boxes = document.querySelectorAll("#main div"),
    playerTurn = 0;

    //this function is used in "getWinner()" in order to highlight the winning boxes and
    //change the display text to say the winner
function selectWinningBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = `${ b1.innerHTML } is the winner!!`;
    turn.style.fontSize = "40px";
}
//Determines throughout the game if there is yet a winner and who that winner is
function determineWinner() {
    //Turned each box div into a variable for use in determining winners based on various
    //winning combinations
    let box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");
    //Picking winners based on the winning combinations
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        selectWinningBoxes(box1, box2, box3);
        audio.play();
    } else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        selectWinningBoxes(box4, box5, box6);
        audio.play();
    } else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        selectWinningBoxes(box7, box8, box9);
        audio.play();
    } else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        selectWinningBoxes(box1, box4, box7);
        audio.play();
    } else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        selectWinningBoxes(box2, box5, box8);
        audio.play();
    } else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        selectWinningBoxes(box3, box6, box9);
        audio.play();
    } else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        selectWinningBoxes(box1, box5, box9);
        audio.play();
    } else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        selectWinningBoxes(box3, box5, box7);
        audio.play();
    } else if (playerTurn === 9) {
        turn.innerHTML = 'Draw. No Winner.'
    }
        
}


//Main game logic. Iterates for length of the amount of divs. Listens for click and determines whether or not div already has the 'X' or
//'O' image then places either image based on whos turn it is determined by whether the 'turn number modulus 2 equals 0' or doesn't. Tries to getWinner() and
//then increments the turn.
for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML !== '<img style="max-width: 100%; max-height: 100%" src="Images/X.GIF" alt="color changing x">'
            && this.innerHTML !== '<img style="max-width: 100%; max-height: 100%" src="Images/O.GIF" alt="color changing o">') {
            if (playerTurn % 2 === 0) {
                this.innerHTML = '<img style="max-width: 100%; max-height: 100%" src="Images/X.GIF" alt="color changing x">';
                turn.innerHTML = "Player 'O' turn";
                playerTurn += 1;
                determineWinner();

            } else {
                this.innerHTML = '<img style="max-width: 100%; max-height: 100%" src="Images/O.GIF" alt="color changing o">';
                turn.innerHTML = "Player 'X' Turn";
                playerTurn += 1;
                determineWinner();
            }
        }

    };
}
//Function for button to listen for a click then remove win condition and set all box values to nothing. Then changes display text to "Start Game".
document.getElementById('replay').addEventListener('click', () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        turn.innerHTML = "Start Game";
        audio.pause();
        audio.currentTime = 0;
        playerTurn = 0;
    }
});