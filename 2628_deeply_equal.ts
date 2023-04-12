function areDeeplyEqual(o1: any, o2: any): boolean {
    //If objects are equal, return true
    if (o1 === o2) { return true; }
    //If one object is an array and the other isn't, return false
    if ( ( Array.isArray(o1) && !Array.isArray(o2) ) || ( Array.isArray(o2) && !Array.isArray(o1) ) ) { return false; }
    //Extract keys
    const keys1 = Object.keys(o1 || {});
    const keys2 = Object.keys(o2 || {});
    //If objects don't contain the same keys, return false
    if (!arraysContainSameElements(keys1, keys2)) { return false; }
    //Initialize return value
    let res = true;
    //Base case if inputs are empty objects or literals
    if (keys1.length < 1 && keys2.length < 1) {
        //If both are empty objects, return true
        if (typeof o1 === 'object' && typeof o2 === 'object') {
            return true;
        //Else they are literals; return comparison
        } else {
            return o1 === o2;
        }
    //If not base case, call recursively on each key
    } else {
        keys1.forEach( key => {
            if ( !areDeeplyEqual(o1[key], o2[key]) ) {
                //If any key values aren't deeply equal, set return value to false and break
                res = false; 
                return;
            }
        })
    }
    return res;

};

//Helper function to compare if two arrays contain same elements regardless of order
function arraysContainSameElements(arr1:any[], arr2:any[]) {
    if (arr1.length !== arr2.length) { return false; }
    arr1.sort();
    arr2.sort();
    let res = true;
    arr1.forEach( (el, i) => {
        if (arr2[i] !== el) {
            res = false;
            return;
        }
    })
    return res;
}