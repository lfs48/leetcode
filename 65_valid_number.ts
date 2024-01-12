function isNumber(s: string): boolean {
    const parts = s.split(/e|E/);

    if (parts.length < 1 || parts.length > 2) {
        return false;
    }

    if (parts.length === 1) {
        return isInteger(s) || isDecimal(s)
    }

    const [left, right] = parts;
    if (left.length < 1 || right.length < 1) {
        return false;
    }
    return (isInteger(left) || isDecimal(left)) && isInteger(right);

};

function isDecimal(s: string): boolean {
    const parts = s.split('.');
    if (parts.length !== 2) { return false }
    const [left, right] = parts;
    if (left.length < 1 || left === '+' || left === '-') {
        return isDigits(right);
    }
    if (right.length < 1) {
        return isInteger(left);
    }
    return isInteger(left) && isDigits(right);

}

function isInteger(s:string): boolean {
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if( !isNumberChar(char) ){
            if( i === 0 && (char === '+' || char === '-') && s.length > 1 ) {
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
}

function isDigits(s:string): boolean {
    if (s.length < 1) { return false }
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if( !isNumberChar(char) ){
            return false;
        }
    }
    return true;
}

function isNumberChar(char:string): boolean {
    return /\d/.test(char);
}