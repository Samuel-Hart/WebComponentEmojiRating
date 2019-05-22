function MySetFactory(arr) {

    let _set = new Set(arr);

    const size = () => _set.size;
    const has = val => _set.has(val);
    const add = val => _set.add(val);
    const remove = val => _set.delete(val);
    const entries = () => _set.entries();
    const values = () => _set.values();

    const findIntersectionSetWith = (_setB) => {

        return "not implemented";

    };

    const findUnionSetWith = (otherSet) => MySetFactory(Array.concat(_set.values(), otherSet.values()));


    return Object.freeze({ size, has, add, clear, remove, entries, values, findIntersectionSetWith, findUnionSetWith, findDifferenceSetWith });

}