import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
// import './index.scss'
// import DocumentItem from './../documentItem/index'
export default class ItemList extends Component {

  static propTypes = {
    itemList: PropTypes.array,
    onItemClick: PropTypes.func
  }

  static defaultProps = {
    itemList: [],
    onItemClick: () => {}
  }

  componentWillMount() {
  }

  render() {
  	const {itemList} = this.props
    return (
      <View className='content'>
      {itemList.map((item,i) => 
          <View className="articl-item" key={item.slug} >
          </View>
          )}
      </View>
    )
  }
}
