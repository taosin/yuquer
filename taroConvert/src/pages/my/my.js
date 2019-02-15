import { Block, View, Text, Image, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './my.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    hasUserLogin: false,
    userInfo: false
  }

  componentWillMount() {
    // if (app.globalData.hasLogin === true){
    this.getUserInfo()
    // }
  }

  getUserInfo = () => {
    var that = this
    Taro.getStorage({
      key: 'hasUserLogin',
      success: function(res) {
        that.setData({
          hasUserLogin: res.data
        })
      }
    })
    Taro.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userInfo: res.data
        })
      }
    })
  }
  config = {
    navigationBarTitleText: '我的'
  }

  render() {
    const { hasUserLogin: hasUserLogin, userInfo: userInfo } = this.state
    return (
      <View className="index">
        <View className="user-info">
          {hasUserLogin === false && (
            <Block>
              <Text className="page-body-text" onClick={this.getUserInfo}>
                点击登录
              </Text>
            </Block>
          )}
          {hasUserLogin === true && (
            <Block>
              <View className="userinfo">
                <Image className="userinfo-avatar" src={userInfo.avatarUrl} />
                <Text className="userinfo-nickname">{userInfo.nickName}</Text>
              </View>
            </Block>
          )}
        </View>
        <View className="user-groups">
          <Navigator
            url="/pages/group/group"
            hoverClass="navigator-hover"
            className="user-group"
          >
            我的分组
          </Navigator>
        </View>
      </View>
    )
  }
}
/*
 * @Author: iMocco
 * @Date:   2017-06-18 15:01:37
 * @Last Modified by:   iMocco
 * @Last Modified time: 2017-06-22 14:41:28
 */
//index.js

export default _C
