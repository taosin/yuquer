/*
* @Author: iMocco
* @Date:   2019-02-15 18:08:23
* @Last Modified by:   iMocco
* @Last Modified time: 2019-03-25 15:12:01
*/
import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtCard, AtGrid } from 'taro-ui'
import https from './../../utils/index.js'
import './book.scss'
@withWeapp('Page')
class _C extends Taro.Component {
	constructor() {
		super(...arguments)
		this.state = {
			current: 0,
			dataList: []
		}
	}
	config = {
		navigationBarTitleText: '仓库'
	}
	componentDidMount() {
		this.getRecentlyDocs();
	}

	getRecentlyDocs() {
		let params = {};
		// params.url = 'users/taoxin/repos'
		// params.data = {}
		// params.data.include_membered = true
		// params.data.type = 'all'
		// params.data.offset = 0
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
		const { dataList } = this.state
		const bookItem = (
			<View className="book-list">
			{dataList.map((item, index) =>
				<View className="book-item" key={index}>
				<AtCard note={item.updated_at} title={item.name} isFull>
				{item.user.name}
				</AtCard>
				</View>
				)}
			</View>
			)
		return (
			<View className="index">
			{bookItem}
			</View>
			)
		}
	}

	export default _C
