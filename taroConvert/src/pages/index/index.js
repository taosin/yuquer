import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { AtTabs, AtTabsPane, AtList, AtListItem } from 'taro-ui'
import './index.scss'
@withWeapp('Page')
class _C extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [
      { value: 'recent-updated', title: '最近编辑的' },
      { value: 'recent-updated', title: '我创建的' }
      ]
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
      {tabList.map((post,index) =>
        <AtTabsPane current={this.state.current} index={index} key={index}>
        <View>
        <AtList>
        <AtListItem
        title='标题文字'
        arrow='right'
        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        arrow='right'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        extraText='详细信息'
        arrow='right'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <AtListItem
        title='标题文字'
        arrow='right'
        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        arrow='right'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        extraText='详细信息'
        arrow='right'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        /><AtListItem
        title='标题文字'
        arrow='right'
        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        arrow='right'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        extraText='详细信息'
        arrow='right'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        /><AtListItem
        title='标题文字'
        arrow='right'
        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        arrow='right'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        extraText='详细信息'
        arrow='right'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        /><AtListItem
        title='标题文字'
        arrow='right'
        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        arrow='right'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
        <AtListItem
        title='标题文字'
        note='描述信息'
        extraText='详细信息'
        arrow='right'
        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        </AtList>
        </View>
        </AtTabsPane>
        )}
        </AtTabs>
        )
    }
  }

  export default _C
