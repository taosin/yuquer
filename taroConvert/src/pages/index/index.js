import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtButton } from 'taro-ui'
import './index.scss'
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
  }

  config = {
    enablePullDownRefresh: true
  }

  render() {
    const { dates: dates } = this.state
    return (
      <View className="index">
      <AtButton>按钮文案</AtButton>
      <AtButton type='primary'>按钮文案</AtButton>
      <AtButton type='secondary'>按钮文案</AtButton>

      </View>
      )
  }
} 

export default _C
