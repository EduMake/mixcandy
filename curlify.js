var curlify = require('curlify')
// generate a request method from this cURL command string
var request = curlify('curl -F "audiofile=@music/01_Making Me Nervous.mp3" http://devapi.gracenote.com/v1/timeline/')
// make an http POST with the specified headers and data
request().pipe(process.stdout)