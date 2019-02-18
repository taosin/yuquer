import { Block, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './login.scss'

@withWeapp('Page')
class _C extends Taro.Component {
  navigateTo = () => {
    // Taro.navigateTo({ url: '/pages/add/add' })
  }
  navigateBack = () => {
    Taro.navigateBack()
  }
  redirectTo = () => {
    Taro.redirectTo({ url: './navigator' })
  }
  config = {
    navigationBarTitleText: '登录'
  }

  render() {
    return <View className="index">dadaad</View>
  }
}

export default _C
