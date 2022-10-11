const extractKey = (objects, key) => {
    values = objects.map((object, index) => {
        let keys = Object.keys(object);
        for (k of keys) {
            if (k === key) return object[k];
        }
    });
    return values;
}

let objects = [{name: 'Ammar', city: 'Shp'}, {name: 'Ahmed', city: 'KHI'}];
values = extractKey(objects, 'city');

console.log(values);