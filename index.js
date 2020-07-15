let createBoardDivs = (board, container) => {
    for (let i = 0; i <board.height; i ++) {
        for (let j = 0; j < board.width; j ++) {
            let e = document.createElement("div");
            e.setAttribute("id", `${i}-${j}`);
            container.appendChild(e);
        }
    }
}
let renderBoardState = (board) => {
    // render state of board
    for (let i = 0; i < board.height; i ++) {
        for (let j = 0; j < board.width; j ++) {
            let el = document.getElementById(`${i}-${j}`);
            el.style.backgroundColor = board.boardArr[i][j];
        }
    }

}

class BoardState {
    constructor() {
        this.height = 20;
        this.width = 10;
        this.gameOver = false;
        this.fallingSpeed = 20;
        this._frameNum = 0;

        this.boardArr = [];
        for (let i = 0; i < this.height; i ++) {
            this.boardArr.push([]);
            for (let j = 0; j < this.width; j ++) {
                this.boardArr[i].push("");
            }
        }

        this.pieces = [];
    }
    addPiece(piece) {
        this.pieces.push(piece);
    }

    renderPieces() {
        this.resetBoardArr();
        for (let piece of this.pieces) {
            for (let coord of piece.coords) {
                if (coord[0] >= 0 && coord[1] >= 0) {
                    this.boardArr[coord[0]][coord[1]] = piece.color;
                }
            }
        }
    }

    resetBoardArr() {
        for (let i = 0; i < this.height; i ++) {
            for (let j = 0; j < this.width; j ++) {
                this.boardArr[i][j] = "";
            }
        }
    }

    pieceCanMove(piece) {
        return true;
    }

    frame(input) {
        if (this.pieces.length === 0) {
            let block1 = new Piece();
            this.addPiece(block1);
        }
        this._frameNum += 1;
        if (this._frameNum % this.fallingSpeed === 0) {
            //console.log(this.pieces)
            let currPiece = this.pieces[this.pieces.length-1];
            if (currPiece.active) {
                // try to move piece
                if (this.pieceCanMove(currPiece)) {
                    // move piece
                    currPiece.moveDown();
                } else {
                    currPiece.active = false;
                }
            } else {
                // check for gameOver condition
                // set gameOver property
                // create a new piece
            }
        }
        // case: moveFrame
        // case: piece falling
        // test if move is possible
        //  update position to one square lower if possible
        //  otherwise go to new piece
        // case: new piece
        // check if game over
        // set gameOver
        // otherwise
        // set old piece to inactive
        // create a new piece
        // exit to piece falling
        // case: not moveFrame
        //  update from user input
        this.renderPieces();
    }

}

class Piece {
    constructor() {
        this.coords = [[0, 4], [0, 5], [0, 6], [-1, 5]];
        this.active = true;
        this.color = 'blue';
    }

    moveDown () {
        this.coords = this.coords.map( (el) => [el[0]+1, el[1]]);
    }

}

let handleInput = () => {
    return;
}

window.addEventListener("DOMContentLoaded", event => {
    let board = new BoardState();
    let container = document.getElementById("board");
    createBoardDivs(board, container);



    // in set interval
    // handle input
    // update boardState
    // invoke renderBoardState
    let frameInterval =setInterval(() => {
        let input = handleInput();
        board.frame(input);
        renderBoardState(board);

    }, 50)


    // let block1 = new Piece();
    // board.addPiece(block1);
    // board.renderPieces();
    // renderBoardState(board);
});
