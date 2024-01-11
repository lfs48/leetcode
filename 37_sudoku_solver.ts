/**
 Do not return anything, modify board in-place instead.
 */
 function solveSudoku(board: string[][]): void {

    function _solve(row:number, col:number) {
        //Find valid values for indicated space
        //If none exist, terminate
        const options = _validOptions(board, row, col);
        if (options.length < 1) { return false };

        //Iterate through possible values
        //Place value in row,col and attempt to solve resulting board
        for(let i = 0; i < options.length; i++) {
            const val = options[i];
            board[row][col] = val;

            //If board has no empty spaces, solution is complete
            const next = _nextEmptySpace(board);
            if (next === null) {
                return true;
            }

            //If resulting board is solved, solution is complete
            if (_solve(next[0], next[1])) {
                return true;
            }
        }

        //If loop completes without returning, no solution exists in this tree
        //Erase value from board and terminate
        board[row][col] = '.';
        return false;

    }

    const start = _nextEmptySpace(board);
    if (start) {
        _solve(start[0], start[1])
    }
};

//Find next empty space on board
function _nextEmptySpace(board: string[][]): number[] | null {
    for(let i = 0; i < board.length; i ++) {
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] === '.') {
                return [i, j];
            }
        }
    }
    return null;
}

//Find all valid values for a space given the current board state
function _validOptions(board: string[][], row:number, col:number): string[] {
    let found = {};
    //check rows and cols
    for(let i = 0; i < board.length; i++) {
        const rowEl = board[row][i];
        const colEl = board[i][col];
        found[rowEl] = true;
        found[colEl] = true;
    }

    //check cells
    const i = Math.floor(row / 3);
    const j = Math.floor(col / 3);
    for(let m = 0; m <= 2; m++) {
        for(let n = 0; n <= 2; n++) {
            const el = board[(i*3)+m][(j*3)+n];
            found[el] = true;
        }
    }

    return ['1','2','3','4','5','6','7','8','9'].filter( (el) => !(el in found) );
};