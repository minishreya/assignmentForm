var TinyURL = require('tinyurl');

// Shorten with Alias Promise Example
// const data = { 'url': 'https://en.wikipedia.org/wiki/URL_redirection', 'alias': 'custom-alias-for-google' }
 
// TinyURL.shortenWithAlias(data).then(function(res) {
//     //console.log(res)
//     console.log(res)
// }, function(err) {
//     console.log(err)
// })

TinyURL.shorten('https://en.wikipedia.org/wiki/URL_redirection', function(res, err) {
    console.log(res);
  if (err)
    console.log(err)
    
});
 
// Resolve Example
TinyURL.resolve("https://tinyurl.com/b4zhlgm").then(
  function(res) {
   // console.log(res); //Returns http://google.com, the full URL located at http://tinyurl.com/2tx
   console.log("logging original url",res)
  },
  function(err) {
    console.log(err);
  }
);