declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

interface Grouped {
    [key: string]: any[];
}

Array.prototype.groupBy = function(fn) {
    const grouped = {} as Grouped;
    this.forEach( el => {
        const key = `${fn(el)}`;
        if (key in grouped) {
            grouped[key].push(el);
        } else {
            grouped[key] = [el]
        }
    });
    return grouped;
}

 export {};