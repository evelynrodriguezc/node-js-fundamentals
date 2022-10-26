const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

/* exec('node modules/console.js', (err, stdout, stderr) =>{
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
}); */

let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function(dat) {
    console.log('is dead?');
    console.log(process.killed);
    console.log(dat.toString());
});

process.on('exit', function() {
    console.log('procces completed successfully');
    console.log(process.killed);
});