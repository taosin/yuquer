function formatTime(date) {
  var date = new Date(date)
  var today = new Date()

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute].map(formatNumber).join(':')
  )
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function dateFormat(date,fmt) {
    date =  date ? new Date(date) : new Date()
    fmt = fmt ? fmt : 'yyyy-MM-dd hh:mm:ss';
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
module.exports = {
  formatTime: formatTime,
  dateFormat: dateFormat
}
