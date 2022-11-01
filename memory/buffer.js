// let buffer = Buffer.alloc(4); //to save 4 bytes of info there
// let buffer = Buffer.from([1, 2, 5]);
/* let buffer = Buffer.from('Hello, world!');

console.log(buffer);
console.log(buffer.toString()); */

// ---

let abc = Buffer.alloc(26);

console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97; //97 es valor A en ASIIC
}

console.log(abc);
console.log(abc.toString());