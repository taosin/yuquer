const AV = require('./utils/libs/av-weapp-min.js')
//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    user:null
  },
})
AV.init({ 
 appId: 'yourappid', 
 appKey: 'yourappkey'
})
AV.User.loginWithWeapp().then(user => {
  console.log(user);
}).catch(console.error)
const user = AV.User.current();
var that = this
wx.getUserInfo({
  success: ({userInfo}) => {
    user.set(userInfo).save().then(user => {
      that.globalData.userInfo = user.toJSON();
    }).catch(console.error);
  }
});