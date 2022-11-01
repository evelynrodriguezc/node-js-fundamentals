const bcrypt = require('bcrypt'); //for passwords or encrypted info

const password = '1024StrongP!';


// using callback
bcrypt.hash(password, 5, function(err, hash) { // using bcryptAsync isn't recommended, the second argument = how many times each character will be crypted in a string character
    console.log(hash);
    bcrypt.compare('password', hash, function(err, res){
        console.log(err);
        console.log(res);
    });
});