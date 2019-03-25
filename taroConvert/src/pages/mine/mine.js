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
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='我的知识库'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='我的团队'
              note='描述信息'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </View>
      </View>
      )
    }
  }

  export default _C
