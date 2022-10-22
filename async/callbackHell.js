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
    }, 1500);
}

function speak(callbackSpeak){
    setTimeout(function() {
        console.log('Bla bla bla ... ');
        callbackSpeak();
    }, 100);
}

function conversation(name, times, callback){
    if(times >= 0){
        speak(function(){  
            conversation(name, --times, callback);
        })
    } else {
        bye(name, callback);
    }
    
}

//--

console.log('Initializing proccess...');
hello('Eve', function(name){
    conversation(name, 3, function(){
        console.log('Process completed');
    });
});


// hello('Eve',function(name) {;
//     speak(function(){;
//         speak(function() {;
//             speak(function(){;
//                 bye(name, function() {;
//                     console.log('Ending proccess...');
//                 });
//             });
//         });
//     });
// }); 
