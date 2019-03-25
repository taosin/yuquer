/*
* @Author: iMocco
* @Date:   2019-03-13 16:49:10
* @Last Modified by:   iMocco
* @Last Modified time: 2019-03-25 18:09:22
*/
import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components'
import { AtIcon, AtAvatar, AtTag } from 'taro-ui'
import './index.scss'
export default class DocumentItem extends Component {

	static propTypes = {
		item: PropTypes.object,
		onItemClick: PropTypes.func
	}

	static defaultProps = {
		item: {},
		onItemClick: () => {}
	}

	componentWillMount() {
	}
	clickItem(item){
		Taro.navigateTo({
			url: `/pages/content/content?namespace=${item.namespace}&doc=${item.slug}`
		})
	}
	render() {
		const {item} = this.props
		return (
			<View className='content' onClick={this.clickItem.bind(this,item)}>
			<AtAvatar circle size='small' text='哈'/>
			<View className='item-info'>
			<Text className='title at-article__h3'>{item.title}</Text>
			<View className='item-status'>
			{ item.status == 0
				&& <AtTag type='primary' size='small'>未更新</AtTag>
			}
			<Text className={item.status == 0 ? 'extra margin-extra':'extra'}>{item.extra}</Text>
			</View>
			<Text className="time">{item.time}</Text>
			</View>
			</View>
			)
		}
	}