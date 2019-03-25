import { Block, View, Text, Image, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtAvatar,AtList, AtListItem } from 'taro-ui'
import withWeapp from '@tarojs/with-weapp'
import './mine.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    hasUserLogin: false,
    userInfo: {}
  }

  componentWillMount() {
    this.setState({
      userInfo: wx.getStorageSync('userInfo') || {},
      hasUserLogin: wx.getStorageSync('userInfo').login ? true: false
    })
  }

  gotoLogin = () => {
    var that = this
    Taro.navigateTo({
      url: '/pages/login/login'
    })
  }
  config = {
    navigationBarTitleText: '我的',
    usingComponents: {
    }
  }

  clickItem(url){
    Taro.switchTab({url})
  }

  render() {
    const { hasUserLogin: hasUserLogin, userInfo: userInfo } = this.state
    return (
      <View className="index">
        <View className="user-info">
          <View className="name-avatar at-row at-row__justify--center">
            <AtAvatar circle image={userInfo.avatar_url} size="large" className="at-col"></AtAvatar>
          </View>
          <Text className="user-name at-row at-row__justify--center">
            {userInfo.name}
          </Text>
        </View>
        <View className="user-follows">
          <View className="at-row">
            <View className="at-col at-col-6 follow at-row at-row__justify--center">
              <Text className="at-col title">关注了</Text>
              <Text className="at-col count">{userInfo.followers_count}</Text>
            </View>
            <View className="at-col at-col-6 follow at-row at-row__justify--center">
              <Text className="at-col title">关注者</Text>
              <Text className="at-col count">{userInfo.following_count}</Text>
            </View>
          </View>
        </View>

        <View className="my-groups">
          <AtList>
            <AtListItem
              title='我的文档'
              arrow='right'
              iconInfo={{ size: 25,
              color: '#096dd9', value: 'file-generic', }}
              onClick={this.clickItem.bind(this,'/pages/index/index')}
            />
            <AtListItem
              title='我的知识库'
              arrow='right'
              iconInfo={{ size: 25,
              color: '#096dd9', value: 'shopping-bag', }}
              onClick={this.clickItem.bind(this,'/pages/book/book')}
            />
            <AtListItem
              title='设置'
              arrow='right'
              iconInfo={{ size: 25,
              color: '#096dd9', value: 'settings', }}
              onClick={this.clickItem.bind(this,'/pages/index/index')}
            />
          </AtList>
        </View>
      </View>
      )
    }
  }

  export default _C
