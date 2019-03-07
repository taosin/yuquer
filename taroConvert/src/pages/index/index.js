import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtTabs, AtTabsPane, AtList, AtListItem } from 'taro-ui'
import './index.scss'
import https from './../../utils/index.js'
@withWeapp('Page')
class _C extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [
      { value: 'recent-updated', title: '最近编辑的' },
      { value: 'recent-updated', title: '我创建的' }
      ],
      dataList: []
    }
  }
  componentDidMount() {
    // this.getMyDocs();
  }
  handleClick(value) {
    this.setState({
      current: value
    },() =>{
      if (value) {
        this.getRecentlyDocs()
      } else {
        this.getMyDocs()
      }
    })
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
          dataList: res.data
        })
      }
    })
  }
  clickItem(item){
    Taro.navigateTo({
      url: `/pages/content/content?namespace=${item.book.namespace}&doc=${item.slug}`
    })
  }
  render() {
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
      {tabList.map((post,index) =>
        <AtTabsPane current={this.state.current} index={index} key={index}>
        <View>
        <AtList>
        {dataList.map((item,i) => 
          <AtListItem className="articl-item"
          key={item.slug}
          title={item.title}
          arrow='right'
          onClick={this.clickItem.bind(this,item)}
          />
          )}
        </AtList>
        </View>
        </AtTabsPane>
        )}
      </AtTabs>
      )
    }
  }

  export default _C
