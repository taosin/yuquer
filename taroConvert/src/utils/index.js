import Taro from '@tarojs/taro'
import { AtToast } from "taro-ui"
let baseUrl = 'https://www.yuque.com/api/v2/';
let headers = {
	'Content-Type': 'application/x-www-form-urlencoded',
	// 'User-Agent': 'YuQuer',
};
let token = wx.getStorageSync('yuque_token');
if(token){
	headers['X-Auth-Token'] = token
}
console.log(token);
function request(options) {
	wx.showLoading();
	return new Promise((resolve, reject) => {
		let url = baseUrl + options.url;
		let method = options.method || 'GET';
		// 如果 存在 options.token，则表示该次请求是用来授权
		if(options.token){
			headers['token'] = options.token
		}

		Taro.request({
			url: url,
			header: headers,
			data: options.data || {},
		}).then(res=> {
			wx.hideLoading();
			resolve(formatResponse(res))
		}).catch(err=>reject(err));
	})
}

function formatResponse(result) {
	let code = result.statusCode
	let msg = ''
	switch (code) {
		case 200:
		msg = '请求成功'
		break;
		case 400:
		msg = '请求的参数不正确，或接口缺少必要信息，请对比文档'
		break;
		case 401:
		msg = '用户Token不正确'
		break;
		case 401:
		msg = '缺少对应功能的权限'
		break;
		case 404:
		msg = '数据不存在，或未开放'
		break;
		case 400:
		msg = '服务器异常'
		break;
		default:
		msg = '服务器异常'
		break;
	}
	let resData = {
		code: code
	}
	if(code === 200){
		resData.data = result.data.data
	}else{
		wx.showToast({
			title: msg,
			icon: 'none',
			duration: 2000
		})
	}
	return resData;
}

function setStorage(key, data){
	wx.setStorage({
		key: key,
		data: data
	})
}

function removeStorage(key){
	setStorage(key, null)
}

function clearStorage(){
	wx.clearStorage()
}

module.exports = {
	request,
	setStorage,
	removeStorage,
	clearStorage
}
