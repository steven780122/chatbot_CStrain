const express = require('express')   //字串表套件
const app = express()   // 用express建app

app.get('/hi', function (req, res) {      // '/hi':路徑, 若改為/hi則, 後面是handler 
                                        // req:使用者送過來的訊息, res:要回傳給使用者

  res.send('hi World!!!')
})

app.get('/hello', function (req, res) {    // get是method
    let query = req.query
    console.log("***")
    console.log(query)
    console.log("***")
    res.send('[GET]Hello World!!!')
})

app.post('/hello', function (req, res) {    // get是method
    let query = req.query
    let username = query.username　　　　// 就可以拿到Tom
    console.log("***")
    console.log(query)
    res.send('[POST]Hello ' +username)
})

app.listen(3000, function () {          //http request有監聽到3000 port，若成功才call back'function'
  console.log('Example app listening on port 3000!')
})