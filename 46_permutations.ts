function permute(nums: number[]): number[][] {

    if (nums.length <= 1) { return [nums] }

    const perms = [] as number[][];
    nums.forEach( (n, i) => {
        const arr = nums.filter( (_,j) => j != i);
        const subperms = permute(arr);
        subperms.forEach( (p) => {
            perms.push([...p,n]);
        })
    })
    return perms;

};