import { Message } from 'iview'

function format (date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (!isNotEmpty(fmt)) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

function isNotEmpty (str) {
  if (str !== '' && str != null && typeof str !== 'undefined') {
    return true
  }
  console.warn('argument format is wrong')
  return false
}

function forFormatData (data, symbol) {
  let content = ''
  let index = 0
  for (let i = 0; i < data.length; i++) {
    if (index > 0) {
      content = content + symbol
    }
    content = content + data[i]
    index++
  }
  return content
}

function msgSuccess (data) {
  Message.info(data)
}

function msgError (data) {
  Message.info(data)
}
export default {
  dataFormat (date, fmt) {
    return format(date, fmt)
  },
  dataForDouhao (data) {
    return forFormatData(data, ',')
  },
  dataForKongGe (data) {
    return forFormatData(data, ' ')
  },
  messgeSuccess (data) {
    msgSuccess(data)
  },
  messgeError (data) {
    msgError(data)
  }
}
