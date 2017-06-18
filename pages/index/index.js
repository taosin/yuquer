//index.js
//获取应用实例
const AV = require('./../../utils/libs/av-weapp-min.js')
Page({
  data: {
    list:[]
  },
  onPullDownRefresh: function () {
    this.onLoad();
  },
  onLoad: function () {
    this.getList();
  },
  getList: function (){
    var that = this
    var query = new AV.Query('AccountBook');
    query.descending('createdAt');
    query.find().then(function(results) {
      that.setData({
        list:results
      })
      wx.stopPullDownRefresh({
        complete: function (res) {
          console.log(res, new Date())
        }
      })
    }, function(error) {});
  }
})

