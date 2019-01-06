// Node.js require() 多个模块引用同一个模块，这个模块只被引用一次
const fs = require('fs')
const path = require('path')
// token 认证
const jwt = require('jsonwebtoken')
const auth = (token) => {
  // 公钥解密，私钥加密
  let cert = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'))
  //jwt返回的是promise
  return jwt.verify(token, cert, {
        algorithms: ['RS256']
      }, (err, decoded) => {
    return decoded
  })
}
//返回decode为布尔值
//该模块就是一个认证功能
module.exports = auth