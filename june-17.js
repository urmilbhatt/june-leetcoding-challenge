const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

var solve = function(board) {
    for (let i = 0 ; i < board.length; i++) {
        console.log(i);

        for (let j = 0; j < i.length; j++) {
            if (i[j] === "O") {
                i[j] = "X";
            }
        }
    }
};