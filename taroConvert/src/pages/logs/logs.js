import { Block, View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './logs.scss'
//logs.js
var util = require('../../utils/util.js')

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    logs: []
  }

  componentWillMount() {
    this.setData({
      logs: (Taro.getStorageSync('logs') || []).map(function(log) {
        return util.formatTime(new Date(log))
      })
    })
  }

  config = {
    navigationBarTitleText: '查看启动日志'
  }

  render() {
    return (
      <Block>
        {/* logs.wxml */}
        <View className="container log-list">
          {/*  <block wx:for="{{logs}}" wx:for-item="log" wx:key="*this">
                                                                             <text class="log-item">{{index + 1}}. {{log}}</text>
                                                                             {{user}}
                                                                           </block>  */}
          <Image
            src="http://od2vc9vqy.bkt.clouddn.com/21_1.jpg"
            mode="aspectFit"
            style="width:100%;"
          />
          <Image
            src="http://od2vc9vqy.bkt.clouddn.com/21_1.jpg"
            mode="aspectFit"
            style="width:100%;"
          />
          <Image
            src="http://od2vc9vqy.bkt.clouddn.com/21_1.jpg"
            mode="widthFix"
            style="width:100%;"
          />
          <Image
            src="http://od2vc9vqy.bkt.clouddn.com/21_1.jpg"
            mode="aspectFit"
            style="width:100%;"
          />
        </View>
      </Block>
    )
  }
}

export default _C
