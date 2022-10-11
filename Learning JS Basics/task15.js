const addKeyAndValue = (objects, key, value) => {
    if (!objects) {
        return { key:value };
    } else {
        objects.forEach((object) => {
            object[key] = value;
        });
    }
    return objects;
}

let objects = [
    {name: 'Ammar', dep: 'Computer Science'}, {name: 'Ahmed', dep: ''},
    {name: 'Muzamil', dep: 'SEO'}
];

console.log(addKeyAndValue(objects, 'isStudent', true));