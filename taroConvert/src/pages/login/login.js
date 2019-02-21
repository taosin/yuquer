import { Block, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui'
import utils from '../../utils/index.js'
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

  constructor(props){
    super(props);
    this.state = {
      username: '',
      token: '',
      loading: false
    }
  }

  handleChange (key, value) {
    this.setState({
      [key]: value ? value.trim(): ''
    })
  }
  submitLogin (event) {
    if(!this.data.username || !this.data.token){
      return Taro.atMessage({type:'error',message:'请填写用户名或 Token'})
    }
    this.setState({
      loading: true
    })
    this.getUserInfoByTokenAndUsername()
  }
  getUserInfoByTokenAndUsername(){
    utils.request({url:'user', token: this.state.token}).then(res=>{
      if(res.data.login === this.state.username){
        utils.setStorage('yuque_token',this.state.token);
        Taro.atMessage({type:'success',message:'授权成功'})
      }else{
        Taro.atMessage({type:'error',message:'语雀授权失败，请检查参数后重新操作'})
      }
      this.setState({
        loading: false
      })
    });
  }
  render() {
    return (<View className="index at-row__align--center at-row__justify--center">
      <View className="at-row at-row__align--center">
      <Image className="avator at-col" src='https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg'></Image>
      </View>
      <View className="login-control">
      <AtForm>
      <AtInput
      clear
      name='username'
      title='用户名'
      type='text'
      placeholder='请填写用户名'
      value={this.state.username}
      onChange={this.handleChange.bind(this, 'username')}
      />
      <AtInput
      clear
      name='token'
      title='Token'
      type='password'
      maxLength={40}
      placeholder='请填写Access Token'
      value={this.state.token}
      onChange={this.handleChange.bind(this, 'token')}
      />
      </AtForm>
      </View>
      <AtButton className="submit-btn" circle loading={loading} type='primary' onClick={this.submitLogin}>确认授权</AtButton>
      <AtMessage />
      </View>)
    }
  }

  export default _C
