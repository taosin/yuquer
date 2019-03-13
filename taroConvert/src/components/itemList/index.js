/*
* @Author: iMocco
* @Date:   2019-03-13 16:41:31
* @Last Modified by:   iMocco
* @Last Modified time: 2019-03-13 16:52:11
*/
import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
import DocumentItem from './../documentItem/index'
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
             <DocumentItem item={item}/>
          </View>
          )}
      </View>
    )
  }
}
