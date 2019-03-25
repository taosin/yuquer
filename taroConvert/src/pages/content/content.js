import { Block, View, Text, RichText } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtTabs, AtTabsPane, AtList, AtListItem } from 'taro-ui'
import './content.scss'
import https from './../../utils/index.js'
// import Towxml from '../../components/towxml/main'
// let render = new Towxml()
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
    let that = this
    https.request(params).then(res => {
      let data = res.data.body_html;
      // data = render.toJson(
      //   res.data.body_html,'markdown'          
      //   );
      // data = render.initData(data, {base: null, app: this.$scope})
      that.setState({
        content: data
      })
    })
  }
  render() {
    return (
      <View>
      dsadaads
      </View>
      )
    }
  }

  export default _C
