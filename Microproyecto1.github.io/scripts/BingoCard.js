function BingoCard() {
    this.player = 0;
    this.matrix = [];
    this.score = 0;

    this.generateMatrix = () =>{
        var b = [];
        var i = [];
        var n = [];
        var g = [];
        var o = [];

        for (var a = 0; a < 5; a++) {
            b[a] = Math.floor(Math.random() * (10 - 1) + 1);
        }

        for (var outer = 0; outer < b.length; outer++) {
            for (var inner = 0; inner < b.length; inner++) {
                if (inner != outer && b[inner] == b[outer]) {
                    b[outer] = Math.floor(Math.random() * (10 - 1) + 1);
                }
            }
        }

        this.matrix.push(b);

        for (var a = 0; a < 5; a++) {
            i[a] = Math.floor(Math.random() * (20 - 11) + 11);
        }

        for (var outer = 0; outer < i.length; outer++) {
            for (var inner = 0; inner < i.length; inner++) {
                if ((inner != outer) && (i[inner] == i[outer])) {
                    i[outer] = Math.floor(Math.random() * (20 - 11) + 11);
                }
            }
        }

        this.matrix.push(i);

        for (var a = 0; a < 5; a++) {
            n[a] = Math.floor(Math.random() * (30 - 21) + 21);
        }

        for (var outer = 0; outer < n.length; outer++) {
            for (var inner = 0; inner < n.length; inner++) {
                if ((inner != outer) && (n[inner] == n[outer])) {
                    n[outer] = Math.floor(Math.random() * (30 - 21) + 21);
                }
            }
        }

        this.matrix.push(n);

        for (var a = 0; a < 5; a++) {
            g[a] = Math.floor(Math.random() * (40 - 31) + 31);
        }

        for (var outer = 0; outer < g.length; outer++) {
            for (var inner = 0; inner < g.length; inner++) {
                if ((inner != outer) && (g[inner] == g[outer])) {
                    g[outer] = Math.floor(Math.random() * (40 - 31) + 31);
                }
            }
        }

        this.matrix.push(g);

        for (var a = 0; a < 5; a++) {
            o[a] = Math.floor(Math.random() * (50 - 41) + 41);
        }

        for (var outer = 0; outer < o.length; outer++) {
            for (var inner = 0; inner < o.length; inner++) {
                if ((inner != outer) && (o[inner] == o[outer])) {
                    o[outer] = Math.floor(Math.random() * (50 - 41) + 41);
                }
            }
        }

        this.matrix.push(o);
        return this.matrix
    }

    this.drawCard = () =>{
        return `<div>
        <td> Jugador: ${this.player}</td>
        <td> Puntaje: ${this.score}</td>
        <table>
            
            <tr>
                <th>B</th>
                <th>I</th>
                <th>N</th>
                <th>G</th>
                <th>O</th>
            </tr>
            <tr>
                <td id = "${this.matrix[0][0]}">${this.matrix[0][0]}</td>
                <td id = "${this.matrix[1][0]}">${this.matrix[1][0]}</td>
                <td id = "${this.matrix[2][0]}">${this.matrix[2][0]}</td>
                <td id = "${this.matrix[3][0]}">${this.matrix[3][0]}</td>
                <td id = "${this.matrix[4][0]}">${this.matrix[4][0]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][1]}">${this.matrix[0][1]}</td>
                <td id = "${this.matrix[1][1]}">${this.matrix[1][1]}</td>
                <td id = "${this.matrix[2][1]}">${this.matrix[2][1]}</td>
                <td id = "${this.matrix[3][1]}">${this.matrix[3][1]}</td>
                <td id = "${this.matrix[4][1]}">${this.matrix[4][1]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][2]}">${this.matrix[0][2]}</td>
                <td id = "${this.matrix[1][2]}">${this.matrix[1][2]}</td>
                <td id = "${this.matrix[2][2]}" style="background:red;><p id="free>FREE</p></td>
                <td id = "${this.matrix[3][2]}">${this.matrix[3][2]}</td>
                <td id = "${this.matrix[4][2]}">${this.matrix[4][2]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][3]}">${this.matrix[0][3]}</td>
                <td id = "${this.matrix[1][3]}">${this.matrix[1][3]}</td>
                <td id = "${this.matrix[2][3]}">${this.matrix[2][3]}</td>
                <td id = "${this.matrix[3][3]}">${this.matrix[3][3]}</td>
                <td id = "${this.matrix[4][3]}">${this.matrix[4][3]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][4]}">${this.matrix[0][4]}</td>
                <td id = "${this.matrix[1][4]}">${this.matrix[1][4]}</td>
                <td id = "${this.matrix[2][4]}">${this.matrix[2][4]}</td>
                <td id = "${this.matrix[3][4]}">${this.matrix[3][4]}</td>
                <td id = "${this.matrix[4][4]}">${this.matrix[4][4]}</td>
            </tr>
        </table>
        <br>
    </div>`
    }
}

