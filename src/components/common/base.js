import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class BaseComponent extends Component {

  componentWillMount () {
    this.loadMore()
  }

  onPullDownRefresh () {
    this.loadMore()
  }
  
  onReachBottom () {
    this.loadMore(false)
  }
  
  loadMore (refetch = true) {
    if (refetch) {
      this.props.page = 1
    } else {
      this.props.page ++
    }
    
    this.props.fetch(this.props.page)
  }

  render () {
    return (
      <View>Component Base</View>
    )
  }
}

export default BaseComponent