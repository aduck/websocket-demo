const net = require('net')
const app = require('./app')
const PORT = 9999
net.createServer(app).listen(PORT || 9999, () => {
  console.log('服务已开启')
})