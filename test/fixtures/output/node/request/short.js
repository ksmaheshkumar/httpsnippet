var request = require('request');

request.get('http://mockbin.com/har', function(error, response, body){
  if(error) throw new Error(error);

});
