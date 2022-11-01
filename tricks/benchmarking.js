console.time('all'); // to understand how long a code or function takes to ejecute


let add1 = 0;

console.time('bucle 1');

for (let i = 0; i < 1000000; i++) {
    add1 += 1;
}

console.timeEnd('bucle 1');

// ---

let add2 = 0;

console.time('bucle 2');

for (let j = 0; j < 9000509; j++) {
    add2 += 1;
}

console.timeEnd('bucle 2');

console.log('Async process start')

console.time('Async');
async()
    .then(() => {
        console.timeEnd('Async');
    });
  
console.timeEnd('all');

function async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async proccess finished');
            resolve();
        });
    });
}