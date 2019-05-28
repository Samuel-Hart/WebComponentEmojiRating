function MySetFactory(arr) {

    let _set = new Set(arr);

    const size = () => _set.size;
    const has = val => _set.has(val);
    const add = val => _set.add(val);
    const remove = val => _set.delete(val);
    const entries = () => _set.entries();
    const values = () => _set.values();
    const clear = () => _set.clear();

    const findIntersectionSetWith = (otherSet) => {
        return MySetFactory([...values()].filter(v => otherSet.has(v)));
    };

    const findUnionSetWith = (otherSet) => MySetFactory([...values(), ...otherSet.values()]);

    const findDifferenceSetWith = (otherSet) => {
        let union = findUnionSetWith(otherSet);
        let interSect = findIntersectionSetWith(otherSet);
        return MySetFactory([...union.values()].filter(v => !interSect.has(v)));
    };

    return Object.freeze({ size, has, add, clear, remove, entries, values, findIntersectionSetWith, findUnionSetWith, findDifferenceSetWith });
}
let strA = "b";
//let setA = MySetFactory(strA.split(''));
//console.log(Array.from(setA.values()));
let strB = "a";
//let setB = MySetFactory(strB.split(''));
//console.log(Array.from(setB.values()));

//console.log(Array.from(setA.findDifferenceSetWith(setB).values()));
//console.log(Array.from(setA.findUnionSetWith(setB).values()));
//console.log(Array.from(setA.findIntersectionSetWith(setB).values()));

function lcs(str1, str2) {

    let lcsRec = function lcsRec(first, second, i1, i2) {
        if (first[i1] === first[i2]) {
            return lcsRec(first, second, i1 + 1, i2 + 2);
        } else if (i1 >= first.size) {}


    };

    let interSect = (MySetFactory(str1.split(''))).findIntersectionSetWith(MySetFactory(str2.split('')));
    //console.log(Array.from(interSect.values()));

    let filteredStr1 = [...str1].filter(v => interSect.has(v));
    let filteredStr2 = [...str2].filter(v => interSect.has(v));

    //console.log(filteredStr1.join(""));
    //console.log(filteredStr2.join(""));

    if (interSect.size() === 0) {
        return '';
    } else if (interSect.size() === 1) {
        return [...interSect.values()][0];
    } else {
        return lcsRec(filteredStr1, filteredStr2, 0, 0);
    }
}

console.log(lcs(strA, strB));