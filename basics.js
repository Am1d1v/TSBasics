// Primitives
var server = 'loading';
function printID(id) {
    if (typeof (id) === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printID('username');
printID(123);
function welcome(persone) {
    if (Array.isArray(persone)) {
        console.log("Hello, ".concat(persone.join(' ')));
    }
    else {
        console.log("Hello, ".concat(persone));
    }
}
welcome(['Name', 'Surname']);
welcome('Name1');
