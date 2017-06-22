/*
* @Author: iMocco
* @Date:   2017-06-18 15:01:37
* @Last Modified by:   iMocco
* @Last Modified time: 2017-06-22 14:41:28
*/
//index.js
Page({
	data: {
		hasUserLogin: false,
		userInfo:false
	},
	onLoad:function(){
		// if (app.globalData.hasLogin === true){
			this.getUserInfo()
		// }
	},
	getUserInfo: function () {
		var that = this
		wx.getStorage({
			key: 'hasUserLogin',
			success: function(res) {
				that.setData({
					hasUserLogin: res.data
				})
			} 
		})
		wx.getStorage({
			key: 'userInfo',
			success: function(res) {
				that.setData({
					userInfo: res.data
				})
			} 
		})
	}
})

