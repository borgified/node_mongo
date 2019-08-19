var http = require('http')

http.createServer(onRequest).listen(8080);
console.log('Server has started');

function onRequest(request, response){
    response.writeHead(200);
      response.write('Hello Noders');
        response.end();
}

var mongoose = require('mongoose');
mongoose.connect('mongodb://db/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


