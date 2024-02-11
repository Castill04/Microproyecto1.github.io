function BallDraw() {
    this.ballDrawnNumber = [];
    this.ballDrawnLetter = [];

    this.drawBall = () => {
        let repeat = 0;
        let ballLetter;
        let ballNumber = 1 + Math.floor(Math.random() * 50);
        for (var index = 0; index < 50; index++) {
            if (ballNumber == this.ballDrawnNumber[index] && ballLetter == this.ballDrawnLetter[index]) {
                repeat++;
            }
        }

        if (repeat == 0) {
            if (ballNumber < 10) {
                this.ballDrawnLetter.push("B");
                this.ballDrawnNumber.push(ballNumber);
            } else if (ballNumber >= 11 && ballNumber <= 20) {
                this.ballDrawnLetter.push("I");
                this.ballDrawnNumber.push(ballNumber);
            } else if (ballNumber > 20 && ballNumber <= 30) {
                this.ballDrawnLetter.push("N");
                this.ballDrawnNumber.push(ballNumber);
            } else if (ballNumber > 30 && ballNumber <= 40) {
                this.ballDrawnLetter.push("G");
                this.ballDrawnNumber.push(ballNumber);
            } else {
                this.ballDrawnLetter.push("O");
                this.ballDrawnNumber.push(ballNumber);
            }
        }
        else {
            ballNumber = 1 + Math.floor(Math.random() * 50);
        }
        repeat = 0;
    };
}