/*
* @Author: iMocco
* @Date:   2017-06-22 14:37:12
* @Last Modified by:   iMocco
* @Last Modified time: 2017-06-22 15:05:58
*/

const AV = require('./../../utils/libs/av-weapp-min.js')
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
	},
	getList: function (){
		var that = this
		var query = new AV.Query('Group');
		query.descending('name');
		query.find().then(function(results) {
			wx.stopPullDownRefresh({
				complete: function (res) {
				}
			})
		}, function(error) {});
	},
	onShareAppMessage: function (res) {
		return {
			title: '快来和我一起记账吧',
			path: '/pages/group/group',
			success: function(res) {
			},
			fail: function(res) {
			}
		}
	}
})