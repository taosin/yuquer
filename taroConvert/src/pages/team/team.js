/*
 * @Author: iMocco
 * @Date:   2019-02-15 18:08:23
 * @Last Modified by:   iMocco
 * @Last Modified time: 2019-02-19 18:05:20
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
 			dataList: []
 		}
 	}
 	config = {
 		navigationBarTitleText: '团队'
 	}
 	componentDidMount() {
 		this.getGroupDatas();
 	}
 	handleClick(value) {
 		this.setState({
 			current: value
 		})
 	}
 	getGroupDatas() {
 		let params = {};
 		params.url = 'users/taoxin/groups'
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
