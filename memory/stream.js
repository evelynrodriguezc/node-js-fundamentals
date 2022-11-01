const fs = require('fs');
const stream = require('stream');
const util = require('util'); // to work with auto herency

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8'); // international standard encoding UTF8 = .toString

/* readableStream.on('data', function(chunk) { //chunk = datos de cada paquete
    //console.log(chunk);
    data += chunk; // for HUG files to add data by small pieces(chunks)
}); */

readableStream.on('end', function(){
    console.log(data);
});


/* // write Stream buffer
process.stdout.write('Hello')
process.stdout.write('Whats')
process.stdout.write('Up') */

const Transform = stream.Transform; // here we have a stream function that let us read and write or modify 

function Capital() { // change text to capitial characters (letters)
    Transform.call(this); 
}
util.inherits(Capital, Transform); // Capital function takes everything needed from Transform

Capital.prototype._transform = function(chunk, codif, cb) {
    chunkCapital = chunk.toString().toUpperCase();
    this.push(chunkCapital);
    cb();
}

let capital = new Capital();

readableStream
    .pipe(capital)  // function used to send from one site to another and make it capital
    .pipe(process.stdout); //what we get from stdout