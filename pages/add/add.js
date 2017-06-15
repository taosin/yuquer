/*
* @Author: iMocco
* @Date:   2017-06-15 13:34:35
* @Last Modified by:   iMocco
* @Last Modified time: 2017-06-15 17:04:24
*/
const AV = require('./../../utils/libs/av-weapp-min.js')
var app = getApp()
Page({
	data: {
		date:'',
		loading:false,
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
		if(!this.data.usety || !this.data.money){
			return;
		}
		var AccountBook = AV.Object.extend('AccountBook');
		var accountBook = new AccountBook();
		this.setData({
			loading: true
		})
		accountBook.set('usety',this.data.usety);
		accountBook.set('money',this.data.money);
		accountBook.set('date',this.data.date);
		accountBook.set('remark',this.data.remark);
		accountBook.set('state','1');
		accountBook.save().then(function (result) {
			if(result.id){
				this.setData({
					loading: false,
					usety: '',
					money: '',
					date: '',
					remark: ''
				})
			}
		}, function (error) {
			console.error(error);
		});
	}
})