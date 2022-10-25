const fs = require('fs'); //fs = filesystem

function read(rout, cb) {
    fs.readFile(rout, (err, data) => {
        cb(data.toString());
    })
}

function write(rout, content, cb) {
    fs.writeFile(rout, content, function(err) {
        if (err) {
            console.error('I was not able to write', err);
        } else {
            console.log('Written successfully');
        }

    });
}

function borrar(rout, cb) {
    fs.unlink(rout, cb);
}

//write(__dirname + '/file1.txt', 'I am a new file', console.log);
//read(__dirname + '/file1.txt', console.log);
borrar(__dirname + '/file1.txt', console.log);