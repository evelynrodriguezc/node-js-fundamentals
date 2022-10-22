async function hello(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hello ' + name);
            resolve(name);
        }, 1000);
    });
}

async function bye(name){
    return new Promise((resolve, reject)  => {
        setTimeout(function() {
            console.log('Bye ' + name);
            resolve();
        }, 1500);
    });
}

async function speak(name){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla ... ');
            /* resolve(name); */
            resolve('Here we have an error');
        }, 100);
    });
}

async function main(){
    let name = await hello('Eve');
    await speak();
    await speak();
    await speak();
    await bye(name);
    console.log('...Process completed');
}

console.log('Starting process...');
main();
console.log('This one will be the second instruction');

