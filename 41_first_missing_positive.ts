function firstMissingPositive(nums: number[]): number {

    //"Sort" array by swapping each element to index equal to its value - 1
    let i = 0;
    while (i < nums.length) {
        const n = nums[i];
        //Ignore negative numbers, numbers greater than array length, and numbers already sorted
        if (n > 0 && n < nums.length && n !== i + 1) {
            const temp = nums[n-1];
            //Ignore duplicates
            if (n === temp) {
                i += 1;
            //Sort n based on its index, leave i at current value to sort the number just swapped to i next
            } else {
                nums[n-1] = n;
                nums[i] = temp;
            }
        } else {
            i += 1;
        }
    }

    //Since all positive integers < array length are in ascending order
    //We can iterate to find the smallest integer >=1 not found in the array
    let target = 1;
    for(let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n === target) {
            target += 1;
        }
    }

    return target;
};