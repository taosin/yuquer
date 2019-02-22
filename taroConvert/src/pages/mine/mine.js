import { Block, View, Text, Image, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtAvatar } from 'taro-ui'
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
    navigationBarTitleText: '我的'
  }

  render() {
    const { hasUserLogin: hasUserLogin, userInfo: userInfo } = this.state
    return (
      <View className="index at-row at-row__align--center at-row__justify--center">
      <View className="user-info at-row at-col at-row__align--center">
      {hasUserLogin === false && (
        <View>
        <Image class='avator' src='https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg'></Image>
        <View className='at-article__h1'>
        欢迎回到语雀
        </View>
        <View className='at-article__h3'>
        写文档，就用语雀
        </View>
        <AtButton circle type='primary' className='login-btn' onClick={this.gotoLogin}>Login</AtButton>
        </View>
        )}
        </View>
      {hasUserLogin === true && (
        <Block>
          你已登录
        </Block>
        )}
        </View>
        )
      }
    }

    export default _C
