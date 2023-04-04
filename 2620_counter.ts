function createCounter(n: number): () => number {
    let count = -1;
    return function() {
        count++;
        return n + count;
    }
}