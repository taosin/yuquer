//index.js
//获取应用实例
const AV = require('./../../utils/libs/av-weapp-min.js')
Page({
  data: {
    list:{},
    dates:[]
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
      wx.stopPullDownRefresh({
        complete: function (res) {
          that.transData(results);
        }
      })
    }, function(error) {});
  },
  transData(data){
    var dates = [];
    var keys = {};
    var values = {};
    for (var i = 0; i < data.length; i++) {
      var result = data[i]._serverData;
      var key =  result.date
      var value = keys[key]
      if(!value){
        keys[key]=key;
        dates.push(key);
        values[key] = [];
        values[key].push(result);
      }else{
        values[key].push(result);
      }
    }
    this.setData({
      list:values,
      dates:dates
    })
    console.log(this.data.dates);
  }
})

