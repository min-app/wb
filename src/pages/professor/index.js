import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

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
class Professor extends Component {
  onfig = {
    navigationBarTitleText: '专家'
  }

  componentWillMount () {
    this.loadMore()
  }

  onPullDownRefresh () {
    this.loadMore()
  }
  
  onReachBottom () {
    this.loadMore(false)
  }

  onClick () {
    Taro.navigateTo({
      url: '/pages/professor/info'
    })
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