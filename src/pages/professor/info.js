import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton } from 'taro-ui'

import Item from '@components/list/item/mult'

import { getInfo } from '@actions/professor'

@connect(({ professor: { detail } }) => ({
  detail
}), (dispatch) => ({
  getInfo () {
    dispatch(getInfo())
  }
}))
class ProfessorInfo extends Component {

  componentWillMount () {
    this.props.getInfo()
  }

  onBtnClick () {
    console.log(123)
  }

  render () {
    const { detail: { avatar, name, count, star, followed, desc } } = this.props
    return (
      <View>
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
        {/* <Item
          avatar='https://tvax2.sinaimg.cn/crop.0.0.960.960.50/00667Hjnly8fnmyxbqgc7j30qo0qo41a.jpg'
          title='王伟'
          star='4.8'
          count='5.3k'
          desc=''
          btnTitle='关注'
          // btnType=''
          onBtnClick={this.onBtnClick}
        /> */}
        <View className='at-article'>
          <View className='at-article__info'>
            个人简介
          </View>
          <View className='at-article__p'>
          先介绍一下伪类和伪元素有什么区别？其实这是个纯概念上的问题，就算不理解也不影响实际的使用。但作为一个CSSer，概念这种东西有时候就像地基，地基越牢固，将来大厦也越坚挺。
          </View>
        </View>
        <View className='fix-bottom'>
          <AtButton
            type='primary'
          >咨询</AtButton>
        </View>
      </View>
    )
  }
}

export default ProfessorInfo