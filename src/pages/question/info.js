import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton } from 'taro-ui'

import Item from '@components/list/item/mult'
import ReplyItem from '@components/list/item/reply'

import { fetchReply, getInfo } from '@actions/question'

@connect(({ question: { replyLists, detail } }) => ({
  replyLists,
  detail
}), (dispatch) => ({
  fetchReply (page) {
    dispatch(fetchReply(page))
  },
  getInfo () {
    dispatch(getInfo())
  }
}))
class QuestionInfo extends Component {

  componentWillMount () {
    this.props.getInfo()
    this.loadMore()
  }

  onPullDownRefresh () {
    this.loadMore()
  }
  
  onReachBottom () {
    this.loadMore(false)
  }

  onBtnClick () {
    console.log(123)
  }

  loadMore (refetch = true) {
    if (refetch) {
      this.props.page = 1
    } else {
      this.props.page ++
    }
    
    this.props.fetchReply(this.props.page)
  }

  render () {
    const { replyLists, detail = {} } = this.props
    const { avatar, name, count, star, followed, desc } = detail
    return (
      <View className='bg-gray'>
        <Item
          avatar={avatar}
          title={name}
          star={star}
          count={count}
          desc=''
          btnTitle='关注'
          btnType={followed ? 'primary' : 'secondary'}
          onBtnClick={this.onBtnClick}
        />
        <View className='at-article bg-white'>
          <View className='at-article__p margin-top'>
          {desc}
          </View>
        </View>
        <View className='bg-white margin-top-l'>
          {replyLists.map((item, index) => (
            <ReplyItem
              taroKey={index}
              // {...item}
              avatar={item.avatar}
              name={item.name}
              content={item.content}
              date={item.date}
              liked={item.liked}
            />
          ))}
        </View>
      </View>
    )
  }
}

export default QuestionInfo