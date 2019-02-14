/*
* @Author: iMocco
* @Date:   2017-06-15 13:34:35
* @Last Modified by:   iMocco
* @Last Modified time: 2017-06-22 10:52:41
*/
const AV = require('./../../utils/libs/av-weapp-min.js')
var app = getApp()
Page({
	data: {
		date:'',
		usety:'',
		money:'',
		reamrk:''
	},
	bindDateChange: function(e) {
		this.setData({
			date: e.detail.value
		})
	},
	bindUsetyKeyInput: function (e) {
		this.setData({
			usety: e.detail.value
		})
	},
	bindMoneyKeyInput: function (e) {
		this.setData({
			money: e.detail.value
		})
	},
	bindRemarkKeyInput: function (e) {
		this.setData({
			reamrk: e.detail.value
		})
	},
	submit:function(e){
		debugger;
    wx.downloadFile({
      url: 'https://segmentfault.com/a/1190000010946164', //仅为示例，并非真实的资源
      success: function (res) {
        debugger
      }
    })
		// if(!this.data.usety || !this.data.money){
		// 	return;
		// }
		// var AccountBook = AV.Object.extend('AccountBook');
		// var accountBook = new AccountBook();
		// accountBook.set('usety',this.data.usety);
		// accountBook.set('money',this.data.money);
		// accountBook.set('date',this.data.date);
		// accountBook.set('remark',this.data.remark);
		// accountBook.set('state','1');
		// accountBook.save().then(function (result) {
		// 	if(result.id){
		// 		wx.showToast({
		// 			title: '添加成功',
		// 			icon: 'success'
		// 		})
		// 	}
		// }, function (error) {
		// 	console.error(error);
		// });
		// this.setData({
		// 	usety: '',
		// 	money: '',
		// 	date: '',
		// 	remark: ''
		// })
	}
})