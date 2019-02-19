/*
 * @Author: iMocco
 * @Date:   2019-02-15 18:08:23
 * @Last Modified by:   iMocco
 * @Last Modified time: 2019-02-19 15:30:56
 */
 import { Block, View, Text } from '@tarojs/components'
 import Taro from '@tarojs/taro'
 import withWeapp from '@tarojs/with-weapp'
 import { AtCard } from 'taro-ui'
 import './find.scss'
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
 		params.url = 'spaces/books'
 		params.data = {
 			type: 'popular'
 		};
 		// this.getDocsDatas(params);
 	}
 	getDocsDatas(params) {
 		https.request(params).then(res => {
 			if (res.code === 200) {

 				this.setState({
 					dataList: res.data
 				})
 				debugger 
 			}
 		})
 	}
 	render() {
 		const { cards } = this.state
 		const card = (
 			<View>
 			{cards.map((item, index) =>
 				<AtCard isFull note={item.note} extra={item.extra} title={item.title} thumb={item.thumb} key={index}>
 				这也是内容区 可以随意定义功能{index}
 				</AtCard>
 				)}
 				</View>
 				)
 			return (
 				<View >
 				{card}
 				</View>
 				)
 			}
 		}

 		export default _C
