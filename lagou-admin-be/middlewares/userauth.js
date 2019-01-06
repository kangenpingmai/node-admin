const authUtil = require('../utils/auth')
const auth = async (req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8')

  // 此处username, 每个连接都会创建一个
  let {token} = req.query
  let decoded = await authUtil(token)
  if (!!decoded) {
    next()
  } else {
    //res.render  ejs模板提供的方法
    res.render('position', {
      ret: false,
      data: JSON.stringify({
        msg: '没有访问权限，请登录~'
      })
    })
  }
}
// 中间站模块 认证
module.exports = {
  auth
}