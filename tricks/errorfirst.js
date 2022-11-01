function async(callback) { //if we are in async mode we have to use callbacks to detect errors (don't use try catch)
    setTimeout(function() {
        try {
            let a =  3 + z;
            callback(null, a);
        } catch (e) {
            callback(e, null);
        }
    }, 1000);
}

async(function(err, data) {
    if(err) {
        console.error('We have an error:');
        console.error(err);
        return false;
        throw err; // throw will not work in async mode
    }
    console.log('Everything went well, my data is', data);
})

