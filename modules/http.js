const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('new request!');
    console.log(req.url);

    switch(req.url) {
        case '/hello':
            res.write('hi, how is it going?');
            res.end();
            break;

        default:
            res.write('error 404: ???');
            res.end();
    }

/*     res.writeHead(201, { 'Content-Type': 'text/plain'  })

    //Write response to the user
    res.write('Hi, Now I know how to use HTTP from NodeJs');

    res.end(); */
}

console.log("Listening http on port 3000");