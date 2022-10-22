function hello(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hello ' + name);
            resolve(name);
        }, 1000);
    });
}

function bye(name){
    return new Promise((resolve, reject)  => {
        setTimeout(function() {
            console.log('Bye ' + name);
            resolve();
        }, 1500);
    });
}

function speak(name){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla ... ');
            /* resolve(name); */
            reject('Here we have an error');
        }, 100);
    });
}

// ---

console.log('Proccess started...');
hello('Eve')
    .then(bye)
    .then(speak)
    .then(speak)
    .then(speak)
    .then((name) => {
        console.log('...Proccess completed');
    })
    .catch(error => {
        console.error('There is an error');
        console.error(error);
    })
