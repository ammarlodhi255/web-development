const createAnimal = (species, verb, noise) => 
    ({species, [verb]: function() { console.log(noise)} });

const dog = createAnimal('dog', 'bark', 'Wooofff!');
console.log(dog);
dog.bark();

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
console.log(s);
s.bleet();