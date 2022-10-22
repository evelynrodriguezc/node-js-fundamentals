function hello(name, myCallback) {
    
    setTimeout(function() {
        console.log('Hello ' + name);
        myCallback(name);
    }, 1000);
}

function bye(name, otherCallback){
    setTimeout(function() {
        console.log('Bye ' + name);
        otherCallback();
    }, 1000);
}

console.log('Initializing proccess...');
hello('Eve',function(name) {
    bye(name, function() {
        console.log('Ending proccess...');
    })
});

/* hello('Eve',function(){});
bye('Eve',function(){}); */
