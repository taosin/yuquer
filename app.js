//app.js
App({
  data: {
    hasUserLogin: false
  },
  onLaunch:function(){
    this.getUserInfo()
  },
  getUserInfo: function () {
  },
  clear: function () {
    this.setData({
      hasUserLogin: false,
      userInfo: {}
    })
  }
})