import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Body from '@components/body'

class Task extends Component {
  config = {
    navigationBarTitleText: '任务大厅'
  }

  render () {
    return (
      <Body
        current={1}
      >
        <View>悬赏任务开发中...</View>
      </Body>
    )
  }
}

export default Task