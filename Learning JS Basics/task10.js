const addKeyandValue = (objects, key, value) => {
    for (let i = 0; i < objects.length; i++) 
        objects[i][key] = value;
    return objects;
}

let objs = addKeyandValue([{name: 'Ammar'}, {city: 'Shikarpur'}], 'isStd', true);
console.log(objs);
