console.log("HellouUUU");

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    /* if(i === 5){      //this process will show an error because z doesn't exit
        var a = 3 + z;   //it will stopt the interval process but the next instructions will continue working
    } */
}, 1000);

console.log('Second instruction'); //here we can see this instruction is going to start before the interval