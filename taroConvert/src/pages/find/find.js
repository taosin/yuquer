/*
 * @Author: iMocco
 * @Date:   2019-02-15 18:08:23
 * @Last Modified by:   iMocco
 * @Last Modified time: 2019-02-15 18:49:49
 */
 import { Block, View, Text } from '@tarojs/components'
 import Taro from '@tarojs/taro'
 import withWeapp from '@tarojs/with-weapp'
 import { AtCard } from 'taro-ui'
 import './find.scss'
 @withWeapp('Page')
 class _C extends Taro.Component {
 	constructor() {
 		super(...arguments)
 		this.state = {
 			posts: [
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' },
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' },
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' },
 			{ note: '小Tips', extra: '额外信息', title: '标题', thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' }
 			]
 		}
 	}
 	handleClick(value) {
 		this.setState({
 			current: value
 		})
 	}
 	render() {
 		const { posts } = this.state
 		const sidebar = (
 			<View>
 			{posts.map((post) =>
 				<Text key={post.id}>
 				{post.title}
 				</Text>
 				)}
 				</View>
 				)
 			const content = posts.map((post) => {
 				return <View key={post.id}>
 				<Text>{post.title}</Text>
 				<Text>{post.content}</Text>
 				</View>
 			})
 			return (
 			<View>
 			{sidebar}
 			<View className="divider" />
 			{content}
 			</View>
 			)
 		}
 	}

 	export default _C
