function areaOfMaxDiagonal(dimensions: number[][]): number {
    let index = 0;
    let longest = 0;
    dimensions.forEach( ([a,b],i) => {
        const c = (a**2) + (b**2);
        if (c > longest) {
            index = i;
            longest = c;
        } else if (c === longest) {
            const [l,w] = dimensions[index];
            if( a*b > l*w) {
                index = i;
            }
        }
    });

    const [a,b] = dimensions[index];
    return a*b;
};