function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
    digits[i] += 1;

    while(i > 0 && digits[i] > 9) {
        digits[i] = 0;
        i -= 1;
        digits[i] += 1;
    }

    if(digits[0] > 9) {
        digits[0] = 0;
        digits = [1,...digits];
    }

    return digits;

};