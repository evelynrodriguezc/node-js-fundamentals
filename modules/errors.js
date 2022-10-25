function anotherFunction(){
    breaks();
}

function breaks(){
    return 3 + z;
}

function breaksAsyn(cb){
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Something went wrong on the Async function');
            cb(err);
        }
    })
}

try {
    //anotherFunction();
    breaksAsyn(function(err)
    {
        console.log(err.message);
    });
} catch(err) {
    console.error('Something went wrong');
    console.error(err.message);
    console.log('But do not worry about it, we catched the error');
}

console.log('This is the end of the code');
