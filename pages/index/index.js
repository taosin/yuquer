//index.js
//获取应用实例
const AV = require('./../../utils/libs/av-weapp-min.js')
Page({
  data: {
    list:[]
  },
  onPullDownRefresh: function () {
    // wx.showToast({
    //   title: '正在加载',
    //   icon: 'loading'
    // })
    this.onLoad();
  },
  onLoad: function () {
    var that = this
    var query = new AV.Query('AccountBook');
    query.descending('createdAt');
    query.find().then(function(results) {
      that.setData({
        list:results
      })
    }, function(error) {});
  }
})
