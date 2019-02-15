import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
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
      <Icon size='60' type='success' />
      <Icon size='60' type='info' />
      <Progress percent={20} showInfo strokeWidth={2} />
      <Progress percent={40} strokeWidth={2} active />
      <Progress percent={60}  strokeWidth={2} active />
      <Progress percent={80}  strokeWidth={2} active activeColor='blue' />
      </View>
      )
    }
  } 

  export default _C
