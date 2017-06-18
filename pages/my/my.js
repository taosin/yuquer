/*
* @Author: iMocco
* @Date:   2017-06-18 15:01:37
* @Last Modified by:   iMocco
* @Last Modified time: 2017-06-18 18:42:09
*/
//index.js
var app = getApp()
Page({
	data: {
		hasUserInfo: false
	},
	onLoad:function(){
		// if (app.globalData.hasLogin === true){
			this.getUserInfo()
		// }
	},
	getUserInfo: function () {
		var that = this

		if (app.globalData.hasLogin === false) {
			wx.login({
				success: _getUserInfo
			})
		} else {
			_getUserInfo()
		}

		function _getUserInfo() {
			wx.getUserInfo({
				success: function (res) {
					that.setData({
						hasUserInfo: true,
						userInfo: res.userInfo
					})
					that.update()
				}
			})
		}
	},
	clear: function () {
		this.setData({
			hasUserInfo: false,
			userInfo: {}
		})
	}
})

