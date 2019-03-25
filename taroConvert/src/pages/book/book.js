import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtTabs, AtTabsPane, AtList, AtListItem, AtDivider, AtNavBar } from 'taro-ui'

import ItemList from './../../components/itemList/index'
import './book.scss'

import https from './../../utils/index.js'
import { formatTime } from './../../utils/util.js'
@withWeapp('Page')
class _C extends Taro.Component {
	constructor() {
		super(...arguments)
		this.state = {
			dataList: []
		}
	}
	componentDidMount() {
		this.getRecentlyDocs();
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
					dataList: this.formatRes(res.data)
				})
			}
		})
	}
	formatRes(res){
		let len = res.length;
		if(!len) return;
		let datas = [];
		res.forEach(item =>{
			let data = {};
			data.title = item.name;
			// data.slug = item.slug;
			data.extra = item.user.name
			// data.namespace = item.book.namespace
			data.time = formatTime(item.updated_at)
			// data.description = item.description
			// data.status = item.status
			datas.push(data)
		})
		return datas;
	}
	clickItem(item){
		Taro.navigateTo({
			url: `/pages/content/content?namespace=${item.namespace}&doc=${item.slug}`
		})
	}
	render() {
		return (
			<View className='index'>
				<View className='item-list'>
					<ItemList itemList={dataList}/>
				</View>
			</View>
			)
	}
}

export default _C
