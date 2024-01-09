function romanToInt(s: string): number {
    let res = 0;
    let i = 0;
    let chars = s.split('');
    while (i < chars.length) {
        const char = chars[i];
        const nextChar = chars[i + 1];
        switch(char) {
            case('I'):
                if (nextChar === 'V' || nextChar === 'X') {
                    res -= 1;
                } else {
                    res += 1;
                }
                break;
            case('V'):
                res += 5;
                break;
            case('X'):
                if (nextChar === 'L' || nextChar === 'C') {
                    res -= 10;
                } else {
                    res += 10;
                }
                break;
            case('L'):
                res += 50;
                break;
            case('C'):
                if (nextChar === 'D' || nextChar === 'M') {
                    res -= 100;
                } else {
                    res += 100;
                }
                break;
            case('D'):
                res += 500;
                break;
            case('M'):
                res += 1000;
                break;
        }
        i += 1;
    }
    return res;
};