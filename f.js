function add(a, b) {
    return a + b;
}

function m(a, b, cb) {
    cb(a + b);
}

// console.log(add(4, 5));
m(3, 4, total => console.log(total));
// Neu la function bat dong bo -> se phai truyen callback
