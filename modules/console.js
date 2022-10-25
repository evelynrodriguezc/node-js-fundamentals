console.log('Something');

console.info('Something 1');

console.error('Something 3');

console.warn('Something 4');

// ---

var table = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'another letter'
    }
]

console.table(table);

console.group('conv');
console.log('Hi');
console.group('Bla');
console.log('Blalabla...');
console.log('Blalabla...');
console.log('Blalabla...');
console.groupEnd('Bla');
console.log('Bye');
console.groupEnd('conv');


console.log('/// other stuff');

function function1(){
    console.group('function 1');
    console.log('This is function 1');
    console.log('This too');
    console.log('This too');
    function2();
    console.log('We came back to function 1');
    console.groupEnd('function 1');
}

function function2(){
    console.group('function 2');
    console.log('now we are on function 2');
    console.groupEnd('function 2');
}

console.log('starting...');
function1();

console.count('times'); 
console.count('times'); 
console.count('times');
console.countReset('times'); 
console.log('...restarting counter...')
console.count('times'); 
