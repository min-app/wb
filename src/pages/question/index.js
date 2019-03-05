import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtList, AtListItem, AtCard, AtButton } from 'taro-ui'

import { asyncFetch } from '@actions/question'

import BaseComponent from '@components/common/base'
import Body from '@components/body'
import Item from '@components/list/item'

@connect(({ question: { lists } }) => ({
  lists
}), (dispatch) => ({
  fetch (page) {
    dispatch(asyncFetch(page))
  }
}))
class Question extends BaseComponent {
  config = {
    navigationBarTitleText: '问题'
  }

  onClick () {
    Taro.navigateTo({
      url: '/pages/question/info'
    })
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