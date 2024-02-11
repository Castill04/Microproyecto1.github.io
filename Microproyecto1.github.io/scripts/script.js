let divBingoCard = document.getElementById("divBingoCard");
let txtInput = document.getElementById("txtInput");
let pcardCount = document.getElementById("pCount");
let btnDraw = document.getElementById("btnDraw");
let pdrawBall = document.getElementById("pdrawBall");
let pjugador = document.getElementById("pjugador");
let counter = 0;
let card;
let ballDraw;
let cardMatrixTotal = [];
let cardMatrix;
let cardLength;
let BingoWinner = false;
let turn = 0;
let pturn = document.getElementById("Turns")
let player = 0;
let score = 0;
let playerNumber;
let cardArray = [];
let playerArray = [1,2,3,4];
let scoreArray = [0,0,0,0];
let playerPosition = 0;

function draw(){
    if(txtInput.value == ""){
        alert("Ingrese un numero entre 1 y 4 en el campo especificado.")
    }
    else{
        if(isNaN(txtInput.value)){
            alert("Ingrese unicamente numeros del 1 al 4.")
            txtInput.value = null;
        }
        else if(txtInput.value > 4){
            alert("El numero maximo de jugadores es 4, ingrese solo numeros entre el 1 y el 4.")
            txtInput.value = null;
        }
        else{
            for(var i = 0; i < txtInput.value; i++){
                card = new BingoCard();
                card.generateMatrix();
                card.player = player + 1;
                divBingoCard.innerHTML += card.drawCard();
                counter++;
                cardMatrix = card.matrix;
                cardMatrixTotal.push(cardMatrix);
                cardArray.push(card);
                player++;
            }
            txtInput.value = null;
        }
    }
    pcardCount.innerHTML = `Numero de Jugadores: ${counter}`;
    if(counter > 4){
        window.location.reload();
    }
    
}

function drawBall(){
    ballDraw = new BallDraw();
    ballDraw.drawBall();
    pdrawBall.innerHTML = ballDraw.ballDrawnLetter+" - "+ballDraw.ballDrawnNumber;

    for(var i = 0; i < cardMatrixTotal.length; i++){
        for(var j = 0; j < cardMatrixTotal[i].length; j++){
            for(var k = 0; k< cardMatrixTotal[i][j].length; k++){
                if(cardMatrixTotal[i][j][k] == ballDraw.ballDrawnNumber){
                    document.getElementById(cardMatrixTotal[i][j][k]).style.background = "red";
                    playerPosition = playerArray[k];
                    checkBingoWinner();
                }
            }
        }
    }
    turn++;
    pturn.innerHTML = `Turno: ${turn}`
    if(BingoWinner == true){
        showWinnerCard();
    }
    if(turn > 25){
        if(scoreArray[0] == scoreArray[1] && scoreArray[1] == scoreArray[2] && scoreArray[2] == scoreArray[3]){
            let confirmation = confirm(`Se ha alcanzado el limite de turnos.\nEs un empate!`)
            if(confirmation == true){
                window.location.reload();
        }
        else{
            let confirmation = confirm(`Se ha alcanzado el limite de turnos.\n Ganador: Jugador ${winnerPlayer()} con un total de ${highScore()} puntos!`)
            if(confirmation == true){
                window.location.reload();
        }
        }
    }
}
}

function highScore(){
    let result = 0;
    for(var i=0; i < scoreArray.length; i++){
        let number = scoreArray[i];
        if(i == 0){
            result = number;
        }
        else{
            if(number > result){
                result = number;
            }
        }
    }
    return result;
}

function winnerPlayer(){
    for(var i=0; i < scoreArray.length; i++){
        if(highScore() == scoreArray[i]){
            w = i + 1;
            return w;
        }
    }
}


function showWinnerCard(){
    let confirmation = confirm("Alguien ha logrado un Bingo! \n Mostrar el carton ganador?");
    if(confirmation == true){
    }
}

function clearCards(){
    let confirmation = confirm("Desea reiniciar el juego?");
    if (confirmation == true) {
        window.location.reload();
    }
}

function checkBingoWinner(){
    let c0r0 = document.getElementById(cardMatrixTotal[0][0][0]);
    let c0r0_color = c0r0.style.background;
    let c0r1 = document.getElementById(cardMatrixTotal[0][0][1]);
    let c0r1_color = c0r1.style.background;
    let c0r2 = document.getElementById(cardMatrixTotal[0][0][2]);
    let c0r2_color = c0r2.style.background;
    let c0r3 = document.getElementById(cardMatrixTotal[0][0][3]);
    let c0r3_color = c0r3.style.background;
    let c0r4 = document.getElementById(cardMatrixTotal[0][0][4]);
    let c0r4_color = c0r4.style.background;

    let c1r0 = document.getElementById(cardMatrixTotal[0][1][0]);
    let c1r0_color = c1r0.style.background;
    let c1r1 = document.getElementById(cardMatrixTotal[0][1][1]);
    let c1r1_color = c1r1.style.background;
    let c1r2 = document.getElementById(cardMatrixTotal[0][1][2]);
    let c1r2_color = c1r2.style.background;
    let c1r3 = document.getElementById(cardMatrixTotal[0][1][3]);
    let c1r3_color = c1r3.style.background;
    let c1r4 = document.getElementById(cardMatrixTotal[0][1][4]);
    let c1r4_color = c1r4.style.background;

    let c2r0 = document.getElementById(cardMatrixTotal[0][2][0]);
    let c2r0_color = c2r0.style.background;
    let c2r1 = document.getElementById(cardMatrixTotal[0][2][1]);
    let c2r1_color = c2r1.style.background;
    let c2r2 = document.getElementById(cardMatrixTotal[0][2][2]);
    let c2r2_color = c2r2.style.background;
    let c2r3 = document.getElementById(cardMatrixTotal[0][2][3]);
    let c2r3_color = c2r3.style.background;
    let c2r4 = document.getElementById(cardMatrixTotal[0][2][4]);
    let c2r4_color = c2r4.style.background;

    let c3r0 = document.getElementById(cardMatrixTotal[0][3][0]);
    let c3r0_color = c3r0.style.background;
    let c3r1 = document.getElementById(cardMatrixTotal[0][3][1]);
    let c3r1_color = c3r1.style.background;
    let c3r2 = document.getElementById(cardMatrixTotal[0][3][2]);
    let c3r2_color = c3r2.style.background;
    let c3r3 = document.getElementById(cardMatrixTotal[0][3][3]);
    let c3r3_color = c3r3.style.background;
    let c3r4 = document.getElementById(cardMatrixTotal[0][3][4]);
    let c3r4_color = c3r4.style.background;

    let c4r0 = document.getElementById(cardMatrixTotal[0][4][0]);
    let c4r0_color = c4r0.style.background;
    let c4r1 = document.getElementById(cardMatrixTotal[0][4][1]);
    let c4r1_color = c4r1.style.background;
    let c4r2 = document.getElementById(cardMatrixTotal[0][4][2]);
    let c4r2_color = c4r2.style.background;
    let c4r3 = document.getElementById(cardMatrixTotal[0][4][3]);
    let c4r3_color = c4r3.style.background;
    let c4r4 = document.getElementById(cardMatrixTotal[0][4][4]);
    let c4r4_color = c4r4.style.background;

    //Vertical
    if(c0r0_color == "red" && c0r1_color == "red" && c0r2_color == "red" && c0r3_color == "red" && c0r4_color == "red"){
        c0r0.style.background = "yellow";
        c0r1.style.background = "yellow";
        c0r2.style.background = "yellow";
        c0r3.style.background = "yellow";
        c0r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c1r0_color == "red" && c1r1_color == "red" && c1r2_color == "red" && c1r3_color == "red" && c1r4_color == "red"){
        c1r0.style.background = "yellow";
        c1r1.style.background = "yellow";
        c1r2.style.background = "yellow";
        c1r3.style.background = "yellow";
        c1r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c2r0_color == "red" && c2r1_color == "red" && c2r2_color == "red" && c2r3_color == "red" && c2r4_color == "red"){
        c2r0.style.background = "yellow";
        c2r1.style.background = "yellow";
        c2r2.style.background = "yellow";
        c2r3.style.background = "yellow";
        c2r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c3r0_color == "red" && c3r1_color == "red" && c3r2_color == "red" && c3r3_color == "red" && c3r4_color == "red"){
        c3r0.style.background = "yellow";
        c3r1.style.background = "yellow";
        c3r2.style.background = "yellow";
        c3r3.style.background = "yellow";
        c3r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c4r0_color == "red" && c4r1_color == "red" && c4r2_color == "red" && c4r3_color == "red" && c4r4_color == "red"){
        c4r0.style.background = "yellow";
        c4r1.style.background = "yellow";
        c4r2.style.background = "yellow";
        c4r3.style.background = "yellow";
        c4r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }
    //Horizontal
    if(c0r0_color == "red" && c1r0_color == "red" && c2r0_color == "red" && c3r0_color == "red" && c4r0_color == "red"){
        c0r0.style.background = "yellow";
        c1r0.style.background = "yellow";
        c2r0.style.background = "yellow";
        c3r0.style.background = "yellow";
        c4r0.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c0r1_color == "red" && c1r1_color == "red" && c2r1_color == "red" && c3r1_color == "red" && c4r1_color == "red"){
        c0r1.style.background = "yellow";
        c1r1.style.background = "yellow";
        c2r1.style.background = "yellow";
        c3r1.style.background = "yellow";
        c4r1.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c0r2_color == "red" && c1r2_color == "red" && c2r2_color == "red" && c3r2_color == "red" && c4r2_color == "red"){
        c0r2.style.background = "yellow";
        c1r2.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r2.style.background = "yellow";
        c4r2.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c0r3_color == "red" && c1r3_color == "red" && c2r3_color == "red" && c3r3_color == "red" && c4r3_color == "red"){
        c0r3.style.background = "yellow";
        c1r3.style.background = "yellow";
        c2r3.style.background = "yellow";
        c3r3.style.background = "yellow";
        c4r3.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    if(c0r4_color == "red" && c1r4_color == "red" && c2r4_color == "red" && c3r4_color == "red" && c4r4_color == "red"){
        c0r4.style.background = "yellow";
        c1r4.style.background = "yellow";
        c2r4.style.background = "yellow";
        c3r4.style.background = "yellow";
        c4r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 1;
        }
        if(playerPosition = 2){
            scoreArray[1] += 1;
        }
        if(playerPosition = 3){
            scoreArray[2] += 1;
        }
        if(playerPosition = 4){
            scoreArray[3] += 1;
        }
    }

    //Diagonal
    if(c0r0_color == "red" && c1r1_color == "red" && c2r2_color == "red" && c3r3_color == "red" && c4r4_color == "red"){
        c0r0.style.background = "yellow";
        c1r1.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r3.style.background = "yellow";
        c4r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 3;
        }
        if(playerPosition = 2){
            scoreArray[1] += 3;
        }
        if(playerPosition = 3){
            scoreArray[2] += 3;
        }
        if(playerPosition = 4){
            scoreArray[3] += 3;
        }
    }

    if(c0r4_color == "red" && c1r3_color == "red" && c2r2_color == "red" && c3r1_color == "red" && c4r0_color == "red"){
        c0r4.style.background = "yellow";
        c1r3.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r1.style.background = "yellow";
        c4r0.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 3;
        }
        if(playerPosition = 2){
            scoreArray[1] += 3;
        }
        if(playerPosition = 3){
            scoreArray[2] += 3;
        }
        if(playerPosition = 4){
            scoreArray[3] += 3;
        }
    }

    //Carton completo
    if(c0r0_color == "red" && c1r0_color == "red" && c2r0_color == "red" && c3r0_color == "red" && c4r0_color == "red" && c0r1_color == "red" && c1r1_color == "red" && c2r1_color == "red" && c3r1_color == "red" && c4r1_color == "red" && c0r2_color == "red" && c1r2_color == "red" && c2r2_color == "red" && c3r2_color == "red" && c4r2_color == "red" && c0r3_color == "red" && c1r3_color == "red" && c2r3_color == "red" && c3r3_color == "red" && c4r3_color == "red" && c0r4_color == "red" && c1r4_color == "red" && c2r4_color == "red" && c3r4_color == "red" && c4r4_color == "red"){
        c0r0.style.background = "yellow";
        c1r0.style.background = "yellow";
        c2r0.style.background = "yellow";
        c3r0.style.background = "yellow";
        c4r0.style.background = "yellow";
        c0r1.style.background = "yellow";
        c1r1.style.background = "yellow";
        c2r1.style.background = "yellow";
        c3r1.style.background = "yellow";
        c4r1.style.background = "yellow";
        c0r2.style.background = "yellow";
        c1r2.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r2.style.background = "yellow";
        c4r2.style.background = "yellow";
        c0r3.style.background = "yellow";
        c1r3.style.background = "yellow";
        c2r3.style.background = "yellow";
        c3r3.style.background = "yellow";
        c4r3.style.background = "yellow";
        c0r4.style.background = "yellow";
        c1r4.style.background = "yellow";
        c2r4.style.background = "yellow";
        c3r4.style.background = "yellow";
        c4r4.style.background = "yellow";
        if(playerPosition = 1){
            scoreArray[0] += 5;
        }
        if(playerPosition = 2){
            scoreArray[1] += 5;
        }
        if(playerPosition = 3){
            scoreArray[2] += 5;
        }
        if(playerPosition = 4){
            scoreArray[3] += 5;
        }
        BingoWinner = true;
    }
    else {
        console.log('Aun no hay un ganador')
    }
}
