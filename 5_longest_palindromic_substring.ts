/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s:string) {
    let i = 0;
    let j = 0;
    const length = s.length;
    let longest = '';

    while (i < length) {
        //substring start and end indices
        let start = i;
        let end = j;

        //if start and end characters match, substring is a palindrome
        //because interior substring is already a palindrome
        while ( start >= 0 && end < length && s[start] === s[end]) {
            //if longer than current longest palindrome, set as longest
            if(end - start + 1 > longest.length) {
                longest = s.substring(start, end+1);
            }
            start = start - 1;
            end = end + 1;
        }

        //alternate incrementing just j and both i and j
        //to alternate checkking for even and odd palindromes
        if (i === j) {
            j = j + 1;
        } else {
            i = i + 1;
            j = i;
        }
    }
    return longest;
};