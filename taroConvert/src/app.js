import { Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './app.scss'
import https from './utils/index.js'

class App extends Taro.Component {
  state = {
    hasUserLogin: false
  }

  componentWillMount() {
    this.$app.globalData = this.globalData
    https.request({url:'user'}).then(res=>{
      console.log(res);
    });
  }
  config = {
    pages: [
    'pages/index/index',
    'pages/mine/mine',
    'pages/login/login',
    'pages/book/book',
    'pages/team/team',
    ],
    window: {
      navigationBarTextStyle: 'black',
      navigationBarTitleText: 'YuQuer',
      navigationBarBackgroundColor: '#fdfdfd',
      backgroundColor: '#fdfdfd'
    }
    ,
    tabBar: {
      color: '#7A7E83',
      selectedColor: '#3cc51f',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/icon_component.png',
        selectedIconPath: 'images/icon_component_HL.png',
        text: '文档'
      },
      {
        pagePath: 'pages/book/book',
        iconPath: 'images/icon_API.png',
        selectedIconPath: 'images/icon_API_HL.png',
        text: '知识库'
      },
      {
        pagePath: 'pages/team/team',
        iconPath: 'images/icon_API.png',
        selectedIconPath: 'images/icon_API_HL.png',
        text: '团队'
      },
      {
        pagePath: 'pages/mine/mine',
        iconPath: 'images/icon_API.png',
        selectedIconPath: 'images/icon_API_HL.png',
        text: '我的'
      }
      ]
    }
  }

  render() {
    return null
  }
}

export default App
Taro.render(<App />, document.getElementById('app'))
