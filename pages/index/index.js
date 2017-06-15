//index.js
//获取应用实例
const AV = require('./../../utils/libs/av-weapp-min.js')
Page({
  data: {
    list:[]
  },
  onLoad: function () {
    var that = this
      var query = new AV.Query('AccountBook');
      query.find().then(function(results) {
        that.setData({
        list:results
      })
     }, function(error) {});
  }
})
