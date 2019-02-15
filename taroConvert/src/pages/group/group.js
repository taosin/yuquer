import { Block, View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './group.scss'
/*
 * @Author: iMocco
 * @Date:   2017-06-22 14:37:12
 * @Last Modified by:   iMocco
 * @Last Modified time: 2017-07-03 11:05:42
 */

const AV = require('./../../utils/libs/av-weapp-min.js')

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    list: {},
    dates: [],
    page: 0,
    scroll: true
  }
  onPullDownRefresh = () => {
    this.onLoad()
  }

  componentWillMount() {
    var that = this
    Taro.getStorage({
      key: 'hasUserLogin',
      success: function(res) {
        if (res.data) {
          that.getList()
        }
      }
    })
  }

  getList = () => {
    var that = this
    var query = new AV.Query('Group')
    query.descending('name')
    query.find().then(
      function(results) {
        Taro.stopPullDownRefresh({
          complete: function(res) {
            this.list = result
          }
        })
      },
      function(error) {}
    )
  }
  onShareAppMessage = res => {
    return {
      title: '快来和我一起记账吧',
      path: '/pages/group/group',
      success: function(res) {},
      fail: function(res) {}
    }
  }
  config = {
    navigationBarTitleText: '我的分组'
  }

  render() {
    return (
      <View className="group-index">
        <View className="main">
          <Block />
        </View>
        <Button openType="share">邀请好友</Button>
      </View>
    )
  }
}

export default _C
