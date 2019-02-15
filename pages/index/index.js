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
  },
  getList: function (){
  },
  submit: function (url) {
    debugger
  }
})

