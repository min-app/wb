import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

import TabBar from '@components/tab'

class Body extends Component {

  props = {
    current: 0
  }
  tabs = [
    'question', 'task', 'professor', 'user'
  ]

  onChangeTab (index, reload = false) {
    if (reload === true) {
      Taro.startPullDownRefresh()
    } else {
      Taro.redirectTo({
        url: `/pages/${this.tabs[index]}/index`
      })
    }
  }

  render () {
    return (
      <View className='body'>
        {this.props.children}
        <TabBar
          current={this.props.current}
          onChangeTab={this.onChangeTab.bind(this)}
        />
      </View>
    )
  }
}

export default Body