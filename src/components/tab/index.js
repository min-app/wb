import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'

class TabBar extends Component {

  tabList = [
    { title: '问题', iconType: 'home' },
    { title: '任务大厅', iconType: 'bullet-list' },
    // { iconType: 'add-circle' },
    { title: '专家', iconType: 'money', text: 101, max: 99 },
    { title: '个人中心', iconType: 'user' }
  ]

  handleClick (current) {
    this.props.onChangeTab(current, current === this.props.current)
  }

  render () {
    return (
      <AtTabBar
        fixed
        backgroundColor='#ececec'
        iconSize={24}
        current={this.props.current}
        tabList={this.tabList}
        onClick={this.handleClick.bind(this)}
      />
    )
  }
}

export default TabBar