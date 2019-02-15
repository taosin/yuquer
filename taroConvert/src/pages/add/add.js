import { Block, View, Input, Picker, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './add.scss'
/*
 * @Author: iMocco
 * @Date:   2017-06-15 13:34:35
 * @Last Modified by:   iMocco
 * @Last Modified time: 2019-02-15 11:52:28
 */
const AV = require('./../../utils/libs/av-weapp-min.js')
var app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    date: '',
    usety: '',
    money: '',
    reamrk: ''
  }
  bindDateChange = e => {
    this.setData({
      date: e.detail.value
    })
  }
  bindUsetyKeyInput = e => {
    this.setData({
      usety: e.detail.value
    })
  }
  bindMoneyKeyInput = e => {
    this.setData({
      money: e.detail.value
    })
  }
  bindRemarkKeyInput = e => {
    this.setData({
      reamrk: e.detail.value
    })
  }
  submit = e => {
    Taro.downloadFile({
      url: 'https://segmentfault.com/a/1190000010946164', //仅为示例，并非真实的资源
      success: function(res) {
        debugger
      }
    })
  }
  config = {
    navigationBarTitleText: '在线记账'
  }

  render() {
    const { date: date } = this.state
    return (
      <Block>
        {/* input.wxml */}
        <View className="index">
          <View className="index-hd">添加消费记录</View>
          <View className="index-main">
            <View className="section">
              <Input placeholder="用途,必填" onInput={this.bindUsetyKeyInput} />
            </View>
            <View className="section">
              <Input
                placeholder="金额,必填"
                type="number"
                onInput={this.bindMoneyKeyInput}
              />
            </View>
            <View className="section">
              <Picker
                mode="date"
                value={date}
                start="2015-09-01"
                onChange={this.bindDateChange}
              >
                <View className={'picker ' + (date ? '' : 'picker-s')}>
                  {date ? date : '日期,必选'}
                </View>
              </Picker>
            </View>
            <View className="section">
              <Input placeholder="备注" onInput={this.bindRemarkKeyInput} />
            </View>
            <View className="buttons">
              <Button
                type="primary"
                size="mini"
                onClick={this.submit}
                hoverClass="other-button-hover"
              >
                保存
              </Button>
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
