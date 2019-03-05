import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import BaseComponent from '@components/common/base'
import Body from '@components/body'
import Mult from '@components/list/item/mult'

import { asyncFetch } from '@actions/professor'

@connect(({ professor: { lists } }) => ({
  lists
}), (dispatch) => ({
  fetch (page) {
    dispatch(asyncFetch(page))
  }
}))
class Professor extends BaseComponent {
  onfig = {
    navigationBarTitleText: '专家'
  }

  onClick () {
    Taro.navigateTo({
      url: '/pages/professor/info'
    })
  }

  render () {
    const { lists } = this.props
    return (
      <Body
        current={2}
      >
        <View>
          {lists.map((item, index) => (
            <Mult
              taroKey={index}
              avatar={item.avatar}
              title={item.name}
              star={item.star}
              count={item.count}
              desc={item.desc}
              btnTitle={`咨询￥${item.price}`}
              // btnType={}
              onClick={this.onClick}
              onBtnClick={this.onClick}
            />
          ))}
        </View>
      </Body>
    )
  }
}

export default Professor