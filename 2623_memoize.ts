type Fun = (...params: any) => any

function memoize(fn: Fn): Fun {
    const memo = {};
    return function(...args) {
        const str = args.join('/');
        if (str in memo) { return memo[str]; }
        memo[str] = fn(...args);
        return memo[str];
    }
}