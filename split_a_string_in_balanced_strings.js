var balancedStringSplit = function(s) {
    let result = 0;
    let count = 1;
    let j = 1;
    const a = s.split("");
    for (let i = 0; i < a.length; i+= j) {
        char = a[i];
        count = 1;
        j = 1;
        while(count > 0) {
            if (a[i+j] === char) {
                count++;
            } else {
                count--;
            }
            j++;
        }
        result++;
    }
    return result;
};