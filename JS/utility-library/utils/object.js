export function isEmpty(object) {
    return Object.keys(object).length === 0;
}

export function cloneObject(object) {
    return {
        ...object
    };
}