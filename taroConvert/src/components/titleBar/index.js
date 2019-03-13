import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
import Tab from './../tab/index'
export default class TitleBar extends Component {

  static propTypes = {
    tabList: PropTypes.array,
    current: PropTypes.number,
    onTabChange: PropTypes.func
  }

  static defaultProps = {
    tabList: [],
    current: 0,
    onTabChange: () => {}
  }

  componentWillMount() {
  }

  render() {
  	const { current, onTabChange, tabList } = this.props
    return (
      <View className='content'>
      	<View className='tab-view'>
      		<Tab tabList={tabList} current={current} onTabClick={onTabChange.bind(this)} />
      	</View>
      	<View className='search-view'>
      		<AtIcon value='search' size='24' color='#333' />
      	</View>
      </View>
    )
  }
}
