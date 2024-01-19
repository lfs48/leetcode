function numberGame(nums: number[]): number[] {
    const sorted = nums.sort( (a,b) => a - b);
    const arr = [] as number[];
    let stack = [] as number[];
    sorted.forEach( (num) => {
        stack.push(num);
        if (stack.length >= 2) {
            arr.push(stack[1]);
            arr.push(stack[0]);
            stack = [];
        }
    });

    if (stack.length > 0) {
        arr.push(stack[0]);
    }

    return arr;
};