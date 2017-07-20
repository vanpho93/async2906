//fs -> filesystem

const fs = require('fs');

// fs.readFile('./data.txt', 'utf8', (err, data) => {
//     if(err) return console.log(err.toString());
//     console.log(data);
// });

function read(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        let a;
        if(err) {
            a = err;
            console.log(a);
        } else {
            a = data;
            console.log('Ket qua: ' + a);
        }
        return a;
    });
}
// const data = read('./data.txt');
// console.log(data);

const b = new read('./data.txt');
// read('./data.txt');

// Khong the return duoc
// Log ra duoc
