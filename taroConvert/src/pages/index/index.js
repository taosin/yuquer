import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtTabs, AtTabsPane, AtList, AtListItem, AtDivider, AtNavBar } from 'taro-ui'

import TitleBar from './../../components/titleBar/index'
import ItemList from './../../components/itemList/index'
import './index.scss'

import https from './../../utils/index.js'
import { formatTime } from './../../utils/util.js'
@withWeapp('Page')
class _C extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [
      { title: '最近编辑的' },
      { title: '我创建的' }
      ],
      dataList: []
    }
  }
  componentDidMount() {
    this.getMyDocs();
  }
  getMyDocs() {
    let params = {};
    params.url = 'user/docs'
    params.data = {
      offset: 0
    };
    this.getDocsDatas(params);
  }
  getRecentlyDocs() {
    let params = {};
    params.url = 'user/recent-updated'
    params.data = {
      offset: 0,
      type: 'Doc'
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
      data.title = item.title;
      data.slug = item.slug;
      data.extra = item.book.user.name + ' / ' + item.book.name
      data.namespace = item.book.namespace
      data.time = formatTime(item.updated_at)
      data.description = item.description
      data.status = item.status
      datas.push(data)
    })
    return datas;
  }
  clickItem(item){
    Taro.navigateTo({
      url: `/pages/content/content?namespace=${item.namespace}&doc=${item.slug}`
    })
  }

  onTabChange(index) {
    this.setState({
      current: index
    },() =>{
      if (index) {
        this.getRecentlyDocs()
      } else {
        this.getMyDocs()
      }
    })
  }
  render() {
    return (
      <View className='index'>
      <View className='title-bar'>
        <TitleBar tabList={tabList} current={current} onTabChange={this.onTabChange}/>
      </View>
      <View className='item-list'>
        <ItemList itemList={dataList}/>
      </View>
      </View>
      )
    }
  }

  export default _C
