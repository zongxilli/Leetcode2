/*
 * @lc app=leetcode id=1275 lang=javascript
 *
 * [1275] Find Winner on a Tic Tac Toe Game
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    
    let board = new Array(9).fill(null);

    for (let i = 0; i < moves.length; i++) {

        board[moves[i][0] * 3 + moves[i][1]] = i % 2 == 0 ? 'A' : 'B';
    }

    return getResult(board, moves.length);

};

let getResult = (board, totalMoves) => {

    let winCases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let c of winCases) {

        if (board[c[0]] == board[c[1]] && board[c[1]] == board[c[2]] && board[c[0]]) return board[c[0]];
    }

    return totalMoves == 9 ? 'Draw' : 'Pending';
}

// @lc code=end

