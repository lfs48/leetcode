function isValid(s: string): boolean {
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let opens = [] as string[];
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        switch(char) {
            case('('):
            case('['):
            case('{'):
                opens.push(char);
                break;
            case(')'):
            case(']'):
            case('}'):
                if (opens.length >= 1 && opens[opens.length -1] === pairs[char]) { 
                    opens = opens.slice(0, opens.length-1);
                } else {
                    return false;
                }
                break;
        }
    }
    return opens.length === 0;
};