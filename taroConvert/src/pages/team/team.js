/*
 * @Author: iMocco
 * @Date:   2019-02-15 18:08:23
 * @Last Modified by:   iMocco
 * @Last Modified time: 2019-02-19 17:05:20
 */
 import { Block, View, Text } from '@tarojs/components'
 import Taro from '@tarojs/taro'
 import withWeapp from '@tarojs/with-weapp'
 import { AtCard } from 'taro-ui'
 import './team.scss'
 import https from './../../utils/index.js'
 @withWeapp('Page')
 class _C extends Taro.Component {
 	constructor() {
 		super(...arguments)
 		this.state = {
 			cards: [
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' },
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' },
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' },
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' }
 			],
 			dataList: []
 		}
 	}
 	config = {
 		navigationBarTitleText: '团队'
 	}
 	componentDidMount() {
 		this.getRecentlyDocs();
 	}
 	handleClick(value) {
 		this.setState({
 			current: value
 		})
 	}
 	getRecentlyDocs() {
 		let params = {};
 		params.url = 'user/recent-updated'
 		params.data = {
 			offset: 0,
 			type: 'Book'
 		};
 		this.getDocsDatas(params);
 	}
 	getDocsDatas(params) {
 		https.request(params).then(res => {
 			if (res.code === 200) {
 				this.setState({
 					dataList: res.data
 				})
 			}
 		})
 	}
 	render() {
 		return (
 			<View>
 			团队
 			</View>
 			)
 		}
 	}

 	export default _C
