import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtTabs, AtTabsPane, AtList, AtListItem, AtDivider, AtNavBar } from 'taro-ui'

import TitleBar from './../../components/titleBar/index'
import ItemList from './../../components/itemList/index'
import './index.scss'

import https from './../../utils/index.js'
import { dateFormat } from './../../utils/util.js'
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
      dataList: [],
      iconInfo: { size: 25, color: '#096dd9', value: 'file-generic'}
    }
  }
  config = {
    navigationBarTitleText: '文档'
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
          dataList: this.data.dataList.concat(this.formatRes(res.data))
        })
      }
    })
  }
  formatRes(res){
    let len = res.length;
    if(!len) return;
    let datas = [];
    let dateVals = {}
    res.forEach(item =>{
      let data = {};
      let dateKey = dateFormat(item.updated_at,'yyyy年MM月')
      data.title = item.title;
      data.slug = item.slug;
      data.extra = item.book.user.name + ' / ' + item.book.name
      data.namespace = item.book.namespace
      data.time = dateFormat(item.updated_at,'yyyy-MM-dd hh:mm')
      data.description = item.description
      data.status = item.status
      dateVals[dateKey] = (dateVals[dateKey] && dateVals[dateKey].length? dateVals[dateKey]: []).concat(data)
    })
    for(let key in dateVals){
      datas.push({
        date: key,
        content: dateVals[key]
      })
    }
    return datas;
  }
  clickItem(item){
    // Taro.navigateTo({
    //   url: `/pages/content/content?namespace=${item.namespace}&doc=${item.slug}`
    // })
  }

  onTabChange(index) {
    this.setState({
      current: index,
      dataList: []
    },() =>{
      if (index) {
        this.getRecentlyDocs()
      } else {
        this.getMyDocs()
      }
    })
  }
  render() {
    const {dataList,iconInfo} = this.props
    return (
      <View className='index'>
      <View className='title-bar'>
      <TitleBar tabList={tabList} current={current} onTabChange={this.onTabChange}/>
      </View>
      <View className='item-list'>
      {dataList.map((item,i) =>
        <View className='index' key={i}>
        <View className='at-article__h2'>{item.date}</View>
        <AtList>
        {item.content.map((doc,j) =>
          <AtListItem
          key={doc.slug}
          title={doc.title}
          note={doc.time}
          arrow='right'
          onClick={this.clickItem.bind(this,doc)}
          iconInfo={iconInfo}
        />
        )}
        </AtList>
        </View>
        )}
        </View>
        </View>
        )
      }
    }

    export default _C
