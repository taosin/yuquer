//index.js
//获取应用实例
Page({
  data: {
    list:{},
    dates:[],
    page:0,
    scroll:true,

  },
  onPullDownRefresh: function () {
    this.onLoad();
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'hasUserLogin',
      success: function(res) {
        if(res.data){
          that.getList();
        }
      } 
    })
    wx.request({
      url: 'https://www.yuque.com/api/v2/users/taoxin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'YuQuer',
        'X-Auth-Token:':'token'
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  getList: function (){
  },
  submit: function (url) {
    debugger
  }
})

