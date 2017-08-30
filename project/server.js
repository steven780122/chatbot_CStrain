const request = require('request');


request('http://www.google.com', function (error, response, body) {   
    
//function:callback當成功對前面連線後拿到的資訊回來，就會呼叫此callback，會提供此3個參數,response及此成功連線的回傳值，
// 像是有status code

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


// 輸入node server.js所看到的log為google.com的原始碼