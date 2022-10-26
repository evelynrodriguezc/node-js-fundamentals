// const p = require('process');

process.on('beforeExit', () => {
    console.log('Process is going to finish...');
});

// differece btween 'beforeExit' and 'exit': once 'exit' is ejecuted,
// you are already disconnected from the EventLoop 

process.on('exit', () => {
    console.log('Process finished successfully');
    setTimeout(()=>{
        console.log('This will not appear ever');   //here we can see the eventLoop disconnect
    }, 0);
});

setTimeout(()=>{
    console.log('This will appear 1');
}, 0);

process.on('uncaughtException', (err, origin) => {
    console.error('Ups, we forgot to catch an error');
    setTimeout(()=>{
        console.log('This will appear from exceptions');
    }, 0);
});

functionNN(); 

console.log('If the error does not get caught, this does not appear');

/* process.on('uncaughtRejection', () => {

}); */


