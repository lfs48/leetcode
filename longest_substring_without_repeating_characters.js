var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) {return 0;}
    let max = 1;
    chars = s.split("");
    for(let i = 0; i < chars.length; i++) {
        const encountered = {};
        let count = 0;
        for (j = i; j < chars.length; j++) {
            if (chars[j] in encountered) {
                if (count > max) {max = count;}
                break;
            } else {
                count++;
                encountered[chars[j]] = true;
                if (count > max && j === chars.length - 1) {max = count;}
            }
        }
    }
    return max;
};