let boardState = [["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""],
                  ["", "", "", "", "", "", "", "", "", ""]];

let renderBoard = () => {
    // constructing new shape => moving = true


}

class Shape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.moving = true;
        // this.color = color

        var square = document.createElement("div");
        square.id = "square";
        // square.setAttribute('style', `background-color:${color};`);
        board.appendChild(square);

    }

    getThisShape() {
        return document.getElementById('square');
    }

    rotate (dir) {
        // when space bar is pressed
        // should rotate the shape in the direction
    }

    // regMovement() {
    //     //render
    // }

    move(dir) {
        //dir will be the specific key that's pressed
        // when direction key is pressed
        // moves left or right
        switch (dir) {
            //arrow down: this.x -= 1;
            //make sure x not <= 1
            //make sure the block below is not filled

            //arrow right: this.y += 1;
            //make sure y not >= 10 - horizontal length

            //arrow left: this.y -= 1;
            //make sure y not <= 1
        }
        //update boardState
        //render
    }

}
window.addEventListener("DOMContentLoaded", event => {
    const board = document.getElementById('board');
    // let squareRow = 3;
    // let squareCol = 5;

    // let square = document.createElement("div");
    // square.id = "square";
    // board.appendChild(square);

    var square = new Shape(1, 5, 'blue');


    // what is square? new shape?
    // what elements am i updating
    // set square to be the shape the shape that is moving

    let renderSquare = () => {
        // get the actual square row
        let squareCol = square.y;
        let squareRow = square.x;
        console.log(square.getThisShape());
        square
        .getThisShape()
        .setAttribute('style', `grid-column:${squareCol} / ${squareCol + 1};grid-row:${squareRow} / ${squareRow + 1};`);
    }

    renderSquare();
    let downSquare = setInterval(() => {
        //if board overflow: clear interval

        //VVVVVVVVV THIS IS NEEDED, but error is thrown
        // if (boardState[square.x][square.y-1]!==""){
        //     clearInterval(downSquare);
        // }
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        // if the square below is empty
        // board[square.x + 2] === ""
        if (square.x < 20 && boardState[square.x][square.y-1] === "") {
            square.x += 1;
            renderSquare();
        } else {
            boardState[square.x-1][square.y-1] = "-";
            square.moving = false;
            square.getThisShape().classList.add('block');
            square.getThisShape().id = "";
            // set moving to false
            // square.moving = false;
            // create new shape
            square = new Shape(1,5);
            renderSquare();
            // that shape is now what moves

        }
    },50);

    //event listeners for direction keys and space bar: keydown event
    //setInterval Shape.regMovement()

});
