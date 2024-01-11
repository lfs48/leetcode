function isValidSudoku(board: string[][]) {
    //validate rows
    for(let i = 0; i < board.length; i++) {
        const row = board[i];
        const map = {};
        for(let j = 0; j < row.length; j++) {
            const el = row[j];
            if (el in map && el !== '.') {
                return false;
            } else {
                map[el] = true;
            }
        }
    }

    //validate columns
    for(let i = 0; i < board.length; i++) {
        const map = {};
        for(let j = 0; j < board.length; j++) {
            const el = board[j][i];
            if (el in map && el !== '.') {
                return false;
            } else {
                map[el] = true;
            }
        }
    }

    //validate cells
    for(let i = 0; i <= 2; i++) {
        for(let j = 0; j <= 2; j++) {
            const map = {};
            for(let m = 0; m <= 2; m++) {
                for(let n = 0; n <= 2; n++) {
                    const el = board[(i*3)+m][(j*3)+n];
                    if (el in map && el !== '.') {
                        return false;
                    } else {
                        map[el] = true;
                    }
                }
            }
        }
    }

    return true;
};