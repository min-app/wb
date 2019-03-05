import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { asyncFetch } from '@actions/question'
import Item from '@components/list/item'

import './index.scss'

@connect(({ userQuestion: { lists } }) => ({
  lists
}), (dispatch) => ({
  fetch (type, page) {
    dispatch(asyncFetch(page))
  }
}))
class UserQuestion extends Component {
  tabList = [
    { title: '我发起的' },
    { title: '我接受的' }
  ]

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
    
    this.props.fetch(this.state.current, this.props.page)
  }
  
  onChangeItem (current) {
    if (current !== this.state.current) {
      this.loadMore()
      this.setState({
        current
      })
    }
  }

  onClick () {
    Taro.navigateTo({
      url: '/pages/question/info'
    })
  }

  render () {
    const { current } = this.state
    const { lists } = this.props
    return (
      <View>
        <AtTabs
          current={current}
          tabList={this.tabList}
          onClick={this.onChangeItem}
        >
        {this.tabList.map((t, index) => (
          <AtTabsPane
            taroKey={index}
          >
            {lists.map((item, index) => (
              <Item
                taroKey={index}
                title={item.name}
                avatar={item.avatar}
                content={item.content}
                date={item.date}
                share={item.share}
                message={item.reply}
                likes={item.likes}
                onClick={this.onClick}
              />
            ))}
          </AtTabsPane>
        ))}
        </AtTabs>
      </View>
    )
  }
}

export default UserQuestion