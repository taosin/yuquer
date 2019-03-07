import { Block, View, Text, RichText } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtTabs, AtTabsPane, AtList, AtListItem } from 'taro-ui'
import './index.scss'
import https from './../../utils/index.js'
@withWeapp('Page')
class _C extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      content: {}
    }
  }
  componentDidMount() {
    console.log(this.$router.params)
    let url = `repos/${this.$router.params.namespace}/docs/${this.$router.params.doc}`
    this.getRecentlyDocs(url);
  }
  handleClick(value) {
    this.setState({
      current: value
    },() =>{
      if (value) {
        this.getRecentlyDocs()
      } else {
        this.getMyDocs()
      }
    })
  }
  getRecentlyDocs(url) {
    let params = {};
    params.url = url
    this.getDocsDatas(params);
  }
  getDocsDatas(params) {
    https.request(params).then(res => {
      if (res.code === 200) {
        this.setState({
          content: res.data
        })
      }
    })
  }
  render() {
    return (
      <View>
        <rich-text nodes={content.body_html}>
        </rich-text>
      </View>
      )
    }
  }

  export default _C
