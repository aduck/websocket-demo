const crypto = require('crypto')
module.exports = socket => {
  let key = ''
  const MIX = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
  socket.on('data', data => {
    if (!key) {
      key = data.toString().match(/Sec-WebSocket-Key: (.+)/)[1]
      key = crypto.createHash('sha1').update(key + MIX).digest('base64')
      socket.write('HTTP/1.1 101 Switching Protocols\r\n')
      socket.write('Upgrade: websocket\r\n')
      socket.write('Connection: Upgrade\r\n')
      socket.write('Sec-WebSocket-Accept: ' + key + '\r\n')
      socket.write('\r\n')
    } else {
      // 数据帧解码编码
    }
  })
}
