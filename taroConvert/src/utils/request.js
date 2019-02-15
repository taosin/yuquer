/*
* @Author: iMocco
* @Date:   2019-02-15 13:06:51
* @Last Modified by:   iMocco
* @Last Modified time: 2019-02-15 14:02:30
*/
import Taro from '@tarojs/taro'

let baseUrl = 'https://www.yuque.com/api/v2';
let headers = {
	'Content-Type': 'application/x-www-form-urlencoded',
	'User-Agent': 'YuQuer',
	'X-Auth-Token:': 'Bgdp1suT5vocfpFLR0GMMfQvPyWKXpY0hexh5UUi'
};
class https(){
	function get(options){
		Taro.request({
			url: 'https://www.yuque.com/api/v2/users/taoxin',
			headers: headers,
			success(res) {
				console.log(that.data.dates);
			}
		})
	}
}
exports default https();