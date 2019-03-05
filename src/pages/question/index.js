import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtList, AtListItem, AtCard, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { asyncFetch } from '@actions/question'

import Body from '@components/body'
import Item from '@components/list/item'

@connect(({ question: { lists } }) => ({
  lists
}), (dispatch) => ({
  fetch (page) {
    dispatch(asyncFetch(page))
  }
}))
class Question extends Component {
  props = {
    page: 1
  }
  config = {
    navigationBarTitleText: '问题'
  }

  componentWillMount() {
    this.refetch()
  }

  onPullDownRefresh () {
    this.refetch()
  }
  
  onReachBottom () {
    this.props.fetch(++this.props.page)
  }

  onClick () {
    Taro.navigateTo({
      url: '/pages/question/info'
    })
  }
  
  refetch () {
    this.props.page = 1
    this.props.fetch(this.props.page)
  }

  render () {
    return (
      <Body
        current={0}
      >
        {this.props.lists.map((item, index) => (
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
      </Body>
    )
  }
}

export default Question