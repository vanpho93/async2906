const fs = require('fs');

function read(filename, f) {
    fs.readFile(filename, 'utf8', (err, data) => {
        //Hoan toan tiep can duoc data
        //100 dong lenh
        f(data);
    });
}

read('./data.txt', x => console.log(x));
console.log(1000);
