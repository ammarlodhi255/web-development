const filterKey = (objects, key) => {
    objects = objects.filter((value) => {
        if(value[key]) return true;
    });
    return objects;
}

let objects = [
    {name: 'Ammar', dep: 'Computer Science'}, {name: 'Ahmed', dep: ''},
    {name: 'Muzamil', dep: 'SEO'}
]

console.log(filterKey(objects, 'dep'));