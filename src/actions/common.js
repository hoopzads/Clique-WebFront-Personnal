export function clone(obj) {
    if (null === obj || "object" !== typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

export function filterKeyOut(initialObject, arrayOfKeys) {
    //actions.requestActionList
    let newObj = clone(initialObject);
    if(typeof(arrayOfKeys) !== "undefined" && arrayOfKeys.length > 0) {
        arrayOfKeys.map((item) => {
            delete newObj[item];
            return null;
        });
    }
    return newObj;
}

export function filterKeyIn(initialObject, arrayOfKeys) {
    //actions.requestActionList
    let newObj = {};
    if(typeof(arrayOfKeys) !== "undefined" && arrayOfKeys.length > 0) {
        arrayOfKeys.map((item) => {
            newObj[item] = initialObject[item];
            return null;
        });
    }
    return newObj;
}

export function mergeObjectWithKeys(objectToBeMerged, objectToMergeWith, arrayOfKeys) {
    let newObj = clone(objectToBeMerged);
    console.log(objectToBeMerged, objectToMergeWith, arrayOfKeys);
    if(typeof(arrayOfKeys) !== "undefined" && arrayOfKeys.length > 0) {
        arrayOfKeys.map((item) => {
            newObj[item] = objectToMergeWith[item];
            return null;
        });
    }
    return newObj;
}
