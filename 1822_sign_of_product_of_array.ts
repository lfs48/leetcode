function arraySign(nums: number[]): number {
    let prod = 1;
    nums.forEach( num => {
        prod = prod * Math.sign(num);
        if (prod === 0) { return; }
    });
    return prod;
};