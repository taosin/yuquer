import { Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './app.scss'
import utils from './utils/index.js'
wx.cloud.init()
class App extends Taro.Component {
  constructor(props){
    super(props);
    this.state = {
      hasUserLogin: false
    }
  }

  componentWillMount() {
    this.$app.globalData = this.globalData
    utils.request({url:'user'}).then(res=>{
      if(res.code === 200 && res.data.login){
        utils.setStorage('userInfo',res.data);
        this.setState({
          hasUserLogin: true
        })
      }else{
        utils.setStorage('userInfo',{});
        this.setState({
          hasUserLogin: false
        })
      }
      // if(!this.hasUserLogin){
      //   Taro.navigateTo({
      //     url: 'pages/login/login'
      //   })
      // }
    });

  }
  config = {
    pages: [
    'pages/index/index',
    'pages/mine/mine',
    'pages/login/login',
    'pages/book/book',
    'pages/team/team',
    'pages/content/content',
    ],
    window: {
      navigationBarTextStyle: 'black',
      navigationBarTitleText: 'YuQuer',
      navigationBarBackgroundColor: '#fff',
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
        iconPath: 'images/wendang.png',
        selectedIconPath: 'images/wendang-active.png',
        text: '文档'
      },
      {
        pagePath: 'pages/book/book',
        iconPath: 'images/cangku.png',
        selectedIconPath: 'images/cangku-active.png',
        text: '知识库'
      },
      // {
      //   pagePath: 'pages/team/team',
      //   iconPath: 'images/team.png',
      //   selectedIconPath: 'images/team_select.png',
      //   text: '团队'
      // },
      {
        pagePath: 'pages/mine/mine',
        iconPath: 'images/wode.png',
        selectedIconPath: 'images/wode-active.png',
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
