import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar, AtIcon } from 'taro-ui'

import './index.scss'

import { fromNow } from '@utils/time'

class Item extends Component {
  defaultProps = {
    share: {
      count: 0,
      has: true
    },
    message: {
      count: 0,
      has: false
    },
    likes: {
      count: 0,
      has: false
    }
  }
  // state = {
  //   share: false,
  //   message: false,
  //   likes: false
  // }

  componentDidMount () {
    this.setState({
      s: this.props.share.has,
      m: this.props.message.has,
      l: this.props.likes.has
    })
  }

  onClick (key, e) {
    e.stopPropagation()
    this.setState({
      [key]: !this.state[key]
    })
  }

  render () {
    const { title, date, avatar, content, share, message, likes, onClick } = this.props
    return (
      <View className='item-box' onClick={onClick}>
        <View className='item-title'>
          <Image
            src={avatar}
            className='item-title-image'
          />
          <Text className='item-title-main'>{title}</Text>
          <Text className='item-title-extra'>{fromNow(date)}</Text>
        </View>
        <View className='item-main'>{content}</View>
        <View className='item-bar'>
          <View
            className='item-bar-item'
            style={{ color: this.state.s ? 'red' : ''}}
            onClick={this.onClick.bind(this, 's')}
          >
            <AtIcon value='external-link' size='14' />
            <Text className='item-bar-item-text'>{share.count}</Text>
          </View>
          <View
            className='item-bar-item'
            style={{ color: this.state.m ? 'red' : ''}}
            onClick={this.onClick.bind(this, 'm')}
          >
            <AtIcon value='message' size='14' />
            <Text className='item-bar-item-text'>{message.count}</Text>
          </View>
          <View
            className='item-bar-item'
            style={{ color: this.state.l ? 'red' : ''}}
            onClick={this.onClick.bind(this, 'l')}
          >
            <AtIcon value='heart' size='14' />
            <Text className='item-bar-item-text'>{likes.count}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Item