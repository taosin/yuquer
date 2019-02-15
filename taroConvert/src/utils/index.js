import Taro from '@tarojs/taro'

let baseUrl = 'https://www.yuque.com/api/v2';
let headers = {
	'Content-Type': 'application/x-www-form-urlencoded',
	'User-Agent': 'YuQuer',
	'X-Auth-Token:': 'Bgdp1suT5vocfpFLR0GMMfQvPyWKXpY0hexh5UUi'
};
function request(options){
	Taro.request({
		url: 'https://www.yuque.com/api/v2/users/taoxin',
		headers: headers,
		success(res) {
			console.log(res);
		}
	})
}
module.exports = {
  request: request
}