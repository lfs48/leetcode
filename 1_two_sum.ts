function twoSum(nums: number[], target: number) {
    //Build hashmap of array value indices
    const indices = {};
    nums.forEach( (num, i) => {
        if (num in indices) {
            indices[num] = [indices[num]];
            indices[num].push(i);
        } else {
            indices[num] = i;
        }
    })

    for(let i = 0; i < nums.length; i++) {
        const a = nums[i];
        const b = target - a;
        if (b in indices) {
            let j = indices[b];
            //If hash value is an array, duplicate values exist in nums
            //If the duplicate equals current value, take the second index as the first index is i
            //Otherwise take the first index
            if( Array.isArray(j) ) {
                if (a === b) {
                    j = j[1];
                } else {
                    j = j[0];
                }
            }
            if (i !== j) {
                return [i, j];
            }
        }
    }
};