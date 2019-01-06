var mongoose = require('mongoose')
//mongoose端口是27017 和服务器连接
mongoose.connect('mongodb://localhost:27017/lagou', {
  useNewUrlParser: true
})
// 和数据库连接
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
})

module.exports = mongoose