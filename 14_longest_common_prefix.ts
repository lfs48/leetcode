function longestCommonPrefix(strs: string[]): string {
    if (strs.length < 1) { return '' }
    if (strs.length === 1) { return strs[0] }

    let i = 1;
    let pref = strs[0];
    while( i < strs.length && pref.length > 0) {
        const str = strs[i];
        pref = commonPrefix(pref, str);
        i += 1;
    }
    return pref;
};

function commonPrefix(str1:string, str2:string): string {
    let i = 0;
    let pref = '';
    while(i < str1.length && i < str2.length) {
        const char1 = str1[i];
        const char2 = str2[i];
        if (char1 === char2) {
            pref += char1;
            i += 1;
        } else {
            return pref;
        }
    }
    return pref;
}