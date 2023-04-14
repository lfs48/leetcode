function jsonStringify(object: any): string {
    let str = '';
    if (Array.isArray(object)) {
        str += '[';
        object.forEach( (el, i) => {
            str += jsonStringify(el);
            if (i < object.length - 1) {
                str += ',';
            }
        });
        str += ']';
    } else if (typeof object === 'object') {
        if (object === undefined || object === null) {
            str += object;
        } else {
            str += '{';
            const keys = Object.keys(object);
            keys.forEach( (key, i) => {
                str += `"${key}":` + jsonStringify(object[key]);
                if (i < keys.length - 1) {
                    str += ',';
                }
            });
            str += '}';
        }
    } else if (typeof object === 'string') {
        str += `"${object}"`;
    } else {
        str += object;
    }
    return str;
};