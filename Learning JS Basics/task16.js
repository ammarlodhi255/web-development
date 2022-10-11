let users = [
{
username: 'larry',
email: 'larry@foo.com',
yearsExperience: 22.1,
favoriteLanguages: ['Perl', 'Java', 'C++'],
favoriteEditor: 'Vim',
hobbies: ['Fishing', 'Sailing', 'Hiking'],
hometown: {
city: 'San Francisco',
state: 'CA'
}
},
{
username: 'jane',
email: 'jane@test.com',
yearsExperience: 33.9,
favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
favoriteEditor: 'Emacs',
hobbies: ['Swimming', 'Biking', 'Hiking'],
hometown: {
city: 'New York',
state: 'NY'
}
},
{
username: 'sam',
email: 'sam@test.com',
yearsExperience: 8.2,
favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
favoriteEditor: 'Atom',
hobbies: ['Golf', 'Cooking', 'Archery'],
hometown: {
city: 'Fargo',
state: 'SD'
}
},
{
username: 'anne',
email: 'anne@test.com',
yearsExperience: 4,
favoriteLanguages: ['C#', 'C++', 'F#'],
favoriteEditor: 'Visual Studio Code',
hobbies: ['Tennis', 'Biking', 'Archery'],
hometown: {
city: 'Albany',
state: 'NY'
}
},
{
username: 'david',
email: 'david@test.com',
yearsExperience: 12.5,
favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
favoriteEditor: 'VS Code',
hobbies: ['Volunteering', 'Biking', 'Coding'],
hometown: {
city: 'Los Angeles',
state: 'CA'
}
}
];

const printEmails = (users) => {
    users.forEach((user) => {
        console.log(user['email']);
    });
}

console.log(printEmails(users));

const printHobbies = (users) => {
    users.forEach((user) => {
        console.log(user['hobbies']);
    });
}

console.log(printHobbies(users));

const findHometownByState = (users, state) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i]['hometown']['state'] === state)
            return users[i];
    }
}

console.log(findHometownByState(users, 'CA'));

const allLanguages = (users) => {
    let languages = [];
    users.forEach((user) => {
        user['favoriteLanguages'].forEach((language) => {
            if(!languages.includes(language)) languages.push(language);
        });
    });
    return languages;
}

console.log(allLanguages(users));

const hasFavouriteEditor = (users, editor) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i]['favoriteEditor'] === editor) 
            return true;
    }
    return false;
}

const findByUsername = (users, username) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i]['username'] === username) return users[i];
    }
    return null;
}

console.log(findByUsername(users, 'larry'));