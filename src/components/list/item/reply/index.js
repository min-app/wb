import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.scss'

class ReplyItem extends Component {
  render () {
    const { avatar, name, content, date, liked } = this.props
    return (
      <View className='item-reply'>
        <View className='item-reply-left'>
          <Image src={avatar} />
        </View>
        <View className='item-reply-right'>
          <View>{name}</View>
          <View>{content}</View>
          <View className='op'>
            <View className='left'>{date}</View>
            <View className='right'>
              <AtIcon
                value='message'
                size={16}
              />
              <AtIcon
                value={liked ? 'star-2' : 'star'}
                // color={liked ? 'red' : ''}
                size={16}
                style='margin-left: 8px;'
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ReplyItem