const fs = require('fs');

// const data = fs.readFileSync('./data.txt', 'utf8');
// console.log(data);

//readFile
//readFileSync

function read(filename) {
    return fs.readFileSync(filename, 'utf8');
}

const data = read('./data.txt');
console.log(data);

// 
