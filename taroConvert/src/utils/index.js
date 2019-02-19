import Taro from '@tarojs/taro'

let baseUrl = 'https://www.yuque.com/api/v2/';
let headers = {
	'Content-Type': 'application/x-www-form-urlencoded',
	'X-Auth-Token': '323223'
};

function request(options) {
	return new Promise((resolve, reject) => {
		let url = baseUrl + options.url;
		let method = options.method || 'GET';
		Taro.request({
			url: url,
			header: headers,
			data: options.data || {},
		}).then(res=> resolve(formatResponse(res))).catch(err=>reject(err));
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
		resData.msg = msg
	}
	return resData;
}
module.exports = {
	request: request
}
